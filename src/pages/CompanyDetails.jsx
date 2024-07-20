import React, { useEffect, useMemo, useState } from "react";
import {
  useDeleteCompanyMutation,
  useGetCompaniesQuery,
} from "../store/api/companiesApi";
import { useNavigate, useParams } from "react-router-dom";
import { useDeleteJobMutation, useGetJobsQuery } from "../store/api/jobsApi";
import JobCard from "../components/JobCard";
import { Button, List } from "flowbite-react";
import { toast } from "react-toastify";

export default function CompanyDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetCompaniesQuery();
  const { data: jobs } = useGetJobsQuery();
  const [deleteCompanyApi] = useDeleteCompanyMutation();
  const [deleteJob] = useDeleteJobMutation();
  const [job, setJob] = useState();

  const company = useMemo(() => {
    const companyItem = data?.find((item) => item.id === id);

    const companyJobs = jobs?.filter((job) => job.companyId === id);

    setJob(companyJobs);

    return companyItem;
  }, [id, data, jobs]);

  const deleteCompany = async (id, name) => {
    await deleteCompanyApi(id);

    const jobsWithCompany = jobs?.filter((job) => job.companyId === id);

    jobsWithCompany.forEach((job) => deleteJob(job.id));

    toast.success(`Deleted Company with id: ${name}`);
    navigate("/companies");
  };

  return (
    <div className="container">
      <Button className="m-3" onClick={() => navigate("/companies")}>
        Back
      </Button>
      <h2 className="text-4xl text-center font-semibold mb-5">
        Company: {company?.name}
      </h2>

      <List>
        <List.Item className="text-2xl font-bold">
          Name: {company?.name}
        </List.Item>
        <List.Item className="text-2xl font-bold">
          Company: {company?.year}
        </List.Item>
        <List.Item className="text-2xl font-bold">
          Description: {company?.description}
        </List.Item>
      </List>

      <div className="w-full flex justify-center mt-5">
        <Button onClick={() => deleteCompany(id, company.name)}>Delete</Button>
      </div>
      <div>
        {job?.map((item) => (
          <JobCard card={item} />
        ))}
      </div>
    </div>
  );
}
