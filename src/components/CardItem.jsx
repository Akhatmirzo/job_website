import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function CardItem({ card }) {
  const { id, name, year, description } = card || {};

  return (
    <Card className="max-w-sm">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h2>
      <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {year}
      </h3>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <Link to={`/companies/${id}`}>
        <Button>See Detail</Button>
      </Link>
    </Card>
  );
}
