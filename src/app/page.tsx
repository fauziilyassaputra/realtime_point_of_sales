import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="p-4">
      <Button>add</Button>
      <Input />
      <DarkmodeToggle />
    </div>
  );
}
