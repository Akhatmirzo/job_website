import React from "react";
import { useGetCompaniesQuery } from "../store/api/companiesApi";
import CardItem from "../components/CardItem";

export default function Companies() {
  const { data: companies, isLoading, isError, error } = useGetCompaniesQuery();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error : {error}</div>;

  return (
    <div className="container">
      <div className="flex gap-5 flex-wrap">
        {companies?.map((company) => (
          <CardItem card={company} />
        ))}
      </div>
    </div>
  );
}
