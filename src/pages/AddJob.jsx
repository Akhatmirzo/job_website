import { Label, TextInput, Button, Textarea, Select } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useGetCompaniesQuery } from "../store/api/companiesApi";
import { useAddJobMutation } from "../store/api/jobsApi";
import { useNavigate } from "react-router-dom";

export default function AddJob() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { data: companies } = useGetCompaniesQuery();
  const [addJobApi, result] = useAddJobMutation();

  const onHandleSubmit = async (data) => {
    const company = companies.find((company) => company.id === data.companyId);

    await addJobApi({ ...data, companyName: company.name });
    if (result.error) {
      toast.error(result.error.message);
      return;
    }
    toast.success("Job added successfully!");
    navigate("/");
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
            <Label htmlFor="title" value="Job title" />
          </div>
          <TextInput id="title" type="text" {...register("title")} required />
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="companyId" value="Select your company" />
          </div>
          <Select id="companyId" required {...register("companyId")}>
            {companies?.map((company) => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="salary" value="Salary" />
          </div>
          <TextInput
            id="salary"
            type="salary"
            {...register("salary")}
            required
          />
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="salaryType" value="Select your salaryType" />
          </div>
          <Select id="salaryType" {...register("salaryType")} required>
            <option>hourly</option>
            <option>monthly</option>
            <option>anually</option>
          </Select>
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
