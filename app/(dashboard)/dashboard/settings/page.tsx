import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <section className="page-grid">
      <div>
        <span className="eyebrow">Preferences</span>
        <h1>Settings</h1>
      </div>
      <Card>
        <div className="stack">
          <Input placeholder="Store name" />
          <Input placeholder="Support email" type="email" />
          <Button>Save changes</Button>
        </div>
      </Card>
    </section>
  );
}
