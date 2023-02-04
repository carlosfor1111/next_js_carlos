import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const CoffeeStore = () => {
  const router = useRouter();

  return (
    <div>
      CoffeStore Page <Link href="/">Back to Home</Link>
      <Link href="/coffee-store/dynamic">Go to page dynamic</Link>
    </div>
  );
};

export default CoffeeStore;
