"use client";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Success() {
  const searchParams = useSearchParams();
  const supabase = createClient();
  const order_id = searchParams.get("order_id");

  const { mutate } = useMutation({
    mutationKey: ["mutateUpdateStatusOrder"],
    mutationFn: async () => {
      const { data } = await supabase
        .from("orders")
        .update({ status: "settled" })
        .eq("order_id", order_id)
        .select()
        .single();

      if (data && data.table_id) {
        await supabase
          .from("tables")
          .update({ status: "available" })
          .eq("id", data.table_id);
      }
    },
  });

  useEffect(() => {
    mutate();
  }, [order_id]);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <CheckCircle className="size-16 text-green-400" />
      <h1 className="text-2xl font-bold">Payment Success</h1>
      <Link href="/order">
        <Button> Back To Order </Button>
      </Link>
    </div>
  );
}

//  order_id=WPUCAFE-1767480645227&status_code=200&transaction_status=settlement
// http://localhost:3000/payment/success?order_id=WPUCAFE-1767480645227&status_code=200&transaction_status=settlement
