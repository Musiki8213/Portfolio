'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const FORMSPREE_FORM_ID = 'xgvgyqkd';

export function ProjectEnquiryForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="submitted_from" value="Sithomola Musiki website - project enquiry" />

      <div>
        <Input id="project-name" name="name" type="text" required placeholder="Your name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>

      <div>
        <Input id="project-email" name="email" type="email" required placeholder="Email address" />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>

      <div>
        <Input id="project-business" name="business" type="text" required placeholder="Business type" />
        <ValidationError prefix="Business" field="business" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>

      <div>
        <Textarea
          id="project-details"
          name="project_details"
          required
          placeholder="Tell us about your project"
        />
        <ValidationError
          prefix="Project details"
          field="project_details"
          errors={state.errors}
          className="mt-1 text-xs text-red-600"
        />
      </div>

      <Button type="submit" disabled={state.submitting} className="w-full">
        {state.submitting ? 'Sending…' : 'Send project details'}
      </Button>

      {state.succeeded && (
        <p className="text-sm text-emerald-700">Project enquiry sent successfully.</p>
      )}
      <ValidationError errors={state.errors} className="text-xs text-red-600" />
    </form>
  );
}
