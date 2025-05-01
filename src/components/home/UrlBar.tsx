"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  url: z.string().min(2, {
    message: "URL must be at least 2 characters.",
  }),
});

const apiEndpoints = [
  { method: "GET", url: "{{base_url}}/{{api}}/widgets/user_widgets" },
  { method: "GET", url: "{{base_url}}/{{api}}/widgets/default_widgets" },
  {
    method: "GET",
    url: "{{base_url}}/{{api}}/integration_accounts/{{sample_integration_acc_id}}/integrations",
  },
  { method: "POST", url: "{{base_url}}/{{api}}/integration_accounts" },
  {
    method: "GET",
    url: "{{base_url}}/{{api}}/integration_accounts/{{sample_integration_acc_id}}",
  },
];

const UrlBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      url: "",
    },
  });

  const handleFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useState(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div
      ref={dropdownRef}
      className="relative flex flex-col items-center w-full"
    >
      <Form {...form}>
        <form className="flex justify-center  space-x-2">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="relative w-full">
                <FormControl>
                  <Input
                    className="w-[50vw] text-white"
                    placeholder="Enter URL or paste text"
                    onFocus={handleFocus}
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            title="Submit"
            className="bg-indigo-500 text-white"
          />
        </form>
      </Form>

      {isDropdownOpen && (
        <div className="absolute top-full -ml-21 mt-1 w-[50vw] bg-neutral-900 text-white rounded-sm z-10">
          {apiEndpoints.map((suggestion, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-700 cursor-pointer flex items-center rounded-sm"
              onClick={() => {
                form.setValue("url", suggestion.url);
                setIsDropdownOpen(false);
              }}
            >
              <span>{suggestion.url}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UrlBar;
