import Link from "next/link";
import React, { Suspense } from "react";

export default async function Page() {
  return (
    <div>
      <input></input>
      <button className="primary">click me</button>
      <Link href="/demo">demo</Link>
    </div>
  );
}
