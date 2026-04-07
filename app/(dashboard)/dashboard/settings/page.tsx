import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { settingsFields } from "@/constants/mock-data";

export default function SettingsPage() {
  return (
    <section className="page-grid">
      <PageHeader eyebrow="Preferences" title="Settings" description="Update operational defaults for the dashboard scaffold." />
      <Card>
        <div className="stack field-grid">
          {settingsFields.map((field) => (
            <label key={field.name} className="auth-field">
              <span>{field.placeholder}</span>
              <Input name={field.name} placeholder={field.placeholder} type={field.type} />
            </label>
          ))}
          <Button>Save changes</Button>
        </div>
      </Card>
    </section>
  );
}
