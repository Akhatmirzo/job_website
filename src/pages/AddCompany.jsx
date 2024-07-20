import { Label, TextInput, Button, Textarea } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import { useAddCompanyMutation } from "../store/api/companiesApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AddCompany() {
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm();
  const [addCompanyApi, result] = useAddCompanyMutation();

  const onHandleSubmit = async (data) => {
    await addCompanyApi(data);

    const res = await result;
    if (!res.error) {
      toast.success("Company added successfully!");
      navigate("/companies");
    } else {
      toast.error("Failed to add company.");
    }
    reset();
  };

  return (
    <div className="w-full h-[calc(100vh-48px)] flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onHandleSubmit)}
        className="flex w-full max-w-md flex-col gap-4"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Company name" />
          </div>
          <TextInput id="name" type="text" {...register("name")} required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="date" value="Company year" />
          </div>
          <TextInput id="date" type="date" {...register("year")} required />
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Your description" />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            required
            rows={4}
            {...register("description")}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
