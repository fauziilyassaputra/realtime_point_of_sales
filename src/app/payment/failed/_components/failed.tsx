"use client";
import { Button } from "@/components/ui/button";
import { Ban } from "lucide-react";
import Link from "next/link";

export default function Failed() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <Ban className="size-16 text-red-400" />
      <h1 className="text-2xl font-bold">Payment Failed</h1>
      <Link href="/order">
        <Button> Back To Order </Button>
      </Link>
    </div>
  );
}

//  order_id=WPUCAFE-1767480645227&status_code=200&transaction_status=settlement
// http://localhost:3000/payment/success?order_id=WPUCAFE-1767480645227&status_code=200&transaction_status=settlement
