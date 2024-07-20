import { Button, Card } from "flowbite-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteJobMutation } from "../store/api/jobsApi";
import { toast } from "react-toastify";

export default function JobCard({ card }) {
  const navigate = useNavigate()
  const { id, title, salary, salaryType, description, companyName } = card || {};
  const [deleteJobApi] = useDeleteJobMutation();

  const deleteJob = async (id, name) => {
    await deleteJobApi(id);
    toast.success(`Deleted job with id: ${name}`);
  };

  return (
    <Card className="max-w-sm">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {companyName}
      </h2>
      <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {salary}$
        <span className="text-sm pl-2 text-gray-500 dark:text-gray-400">
          /{salaryType}
        </span>
      </h3>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <div className="flex items-start gap-3">
        <Link to={`/job/${id}`}>
          <Button>See Detail</Button>
        </Link>
        <Button onClick={() => deleteJob(id, title)}>Delete</Button>
      </div>
    </Card>
  );
}
