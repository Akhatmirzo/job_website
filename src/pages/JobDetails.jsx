import { Button, List } from "flowbite-react";
import React, { useMemo } from "react";
import { useDeleteJobMutation, useGetJobsQuery } from "../store/api/jobsApi";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function JobDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetJobsQuery();
  const [deleteJobApi] = useDeleteJobMutation();

  const job = useMemo(() => {
    return data?.find((job) => job.id === id);
  }, [id, data]);

  const deleteJob = async (id, name) => {
    await deleteJobApi(id);
    navigate(`/`); // Redirect to edit page after deletion
    toast.success(`Deleted job with id: ${name}`);
  };

  return (
    <div className="container">
      <Button className="m-3" onClick={() => navigate("/")}>
        Back
      </Button>
      <List>
        <List.Item className="text-2xl font-bold">
          Title: {job?.title}
        </List.Item>
        <List.Item className="text-2xl font-bold">
          Company: {job?.company}
        </List.Item>
        <List.Item className="text-2xl font-bold">
          Company: {job?.companyName}
        </List.Item>
        <List.Item className="text-2xl font-bold">
          Salary: {job?.salary}$ / {job?.salaryType}
        </List.Item>
        <List.Item className="text-2xl font-bold">
          Description: {job?.description}
        </List.Item>
        <Button onClick={() => deleteJob(id, job.title)}>Delete</Button>
      </List>
    </div>
  );
}
