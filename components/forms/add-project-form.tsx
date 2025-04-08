"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { imageRemove } from "@/actions/imageRemove";
import { addProject } from "@/actions/project";
import { zodResolver } from "@hookform/resolvers/zod";
import { Project } from "@prisma/client";
import { Loader2, PencilLine, X, XIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { UploadDropzone } from "@/lib/uploadthing";
import { projectSchema, TProject } from "@/lib/validations/project";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";

const roles = [
  {
    id: "webdeveloper",
    label: "Web Developer",
  },
  {
    id: "ui/ux desginer",
    label: "UI/UX Designer",
  },
  {
    id: "typography",
    label: "Typography",
  },
  {
    id: "api",
    label: "Api",
  },
] as const;
const tags = [
  {
    id: "reactjs",
    label: "Reactjs",
  },
  {
    id: "nextjs",
    label: "Nextjs",
  },
  {
    id: "tailwindcss",
    label: "Tailwindcss",
  },
  {
    id: "html/css/js",
    label: "Html/Css/Js",
  },
  {
    id: "prisma",
    label: "Prisma",
  },
  {
    id: "firebase",
    label: "Firebase",
  },
  {
    id: "mongodb",
    label: "Mongodb",
  },
] as const;

interface AddProjectProps {
  project?: Project | null;
}
export function Addproject({ project }: AddProjectProps) {
  const [image, setImage] = useState<string>("");
  const [imageKey, setImageKey] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const form = useForm<TProject>({
    resolver: zodResolver(projectSchema),
    defaultValues: project || {
      title: "",
      description: "",
      image: "",
      time: "",
      client: "",
      repo: "",
      site: "",
      tags: [],
      role: [],
    },
  });
  const handleRemove = async () => {
    const res = await imageRemove(imageKey);
    if (res.status === 401) {
      setImage("");
      setImageKey("");
      toast.success("image removed successfully");
    }
  };
  const router = useRouter();
  async function onSubmit(data: TProject) {
    try {
      const res = await addProject(data);
      if (res?.success) {
        toast.success(res.success);
        setImage("");
        setImageKey("");
        form.reset();
        setImage("");
        router.push("/admin/projects");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }
  const handleDelete = (index: number) => {
    // setImage(image?.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const subscription = form.watch((value, { name, type }) =>
      console.log(value, name, type),
    );
    return () => subscription.unsubscribe();
  }, [form, image]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Choose an Image</FormLabel>
              <FormControl>
                <Input type="hidden" placeholder="Image" {...field} />
              </FormControl>
              {image ? (
                <div className="relative rounded border">
                  <Image
                    src={image}
                    alt="img"
                    height={400}
                    width={400}
                    className="object-contain"
                  />
                  <Button
                    className="absolute top-0 right-0"
                    onClick={() => handleRemove()}
                    type="button"
                    size="icon"
                    variant="ghost"
                  >
                    <X />
                  </Button>
                </div>
              ) : (
                <UploadDropzone
                  endpoint="imageUploader"
                  className="w-full gap-x-2 rounded p-4 text-green-900"
                  onClientUploadComplete={res => {
                    // Do something with the response
                    console.log("Files: ", res);
                    setImage(res[0].url);
                    setImageKey(res[0].key);
                    form.setValue("image", res[0].url);
                    toast.success("Upload Completed" + res[0].url);
                  }}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    toast.error(`ERROR! ${error.message}`);
                  }}
                />
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github repo</FormLabel>
              <FormControl>
                <Input placeholder="repo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="site"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Live site</FormLabel>
              <FormControl>
                <Input placeholder="site" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Time</FormLabel>
              <FormControl>
                <Input placeholder="time" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="client"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Client</FormLabel>
              <FormControl>
                <Input placeholder="client" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-start justify-between space-x-3">
          <FormField
            control={form.control}
            name="role"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Roles</FormLabel>
                </div>
                {roles?.map(item => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="role"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-y-0 space-x-3"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={checked => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        value => value !== item.id,
                                      ),
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Tags</FormLabel>
                </div>
                {tags?.map(item => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="tags"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-y-0 space-x-3"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={checked => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        value => value !== item.id,
                                      ),
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {project ? (
          <Button disabled={loading} className="max-w-[150px]">
            {loading ? (
              <Fragment>
                <Loader2 className="mr-2 size-4" />
                Updating
              </Fragment>
            ) : (
              <Fragment>
                <PencilLine className="size-4" />
                Update
              </Fragment>
            )}
          </Button>
        ) : (
          <Button className="max-w-[150px]" disabled={loading}>
            {loading ? (
              <Fragment>
                <Loader2 className="size-4" />
                Creating
              </Fragment>
            ) : (
              <Fragment>
                <PencilLine className="size-4" />
                Create Project
              </Fragment>
            )}
          </Button>
        )}
      </form>
    </Form>
  );
}
