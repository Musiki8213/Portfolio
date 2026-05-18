import { useForm, ValidationError } from '@formspree/react';

const FORMSPREE_FORM_ID = 'xgvgyqkd';

export const ProjectEnquiryForm = () => {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);
  const inputClassName =
    'w-full rounded-xl border border-[#d4d4d4] dark:border-[#ffffff]/30 bg-[#ffffff] dark:bg-[#000000] dark:text-[#ffffff] px-4 py-3 text-sm';

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input type="hidden" name="submitted_from" value="Sithomola Musiki website - project enquiry" />

      <div>
        <input
          id="project-name"
          name="name"
          type="text"
          required
          className={inputClassName}
          placeholder="Name"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1" />
      </div>

      <div>
        <input
          id="project-email"
          name="email"
          type="email"
          required
          className={inputClassName}
          placeholder="Email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
      </div>

      <div>
        <input
          id="project-business"
          name="business"
          type="text"
          required
          className={inputClassName}
          placeholder="Business type"
        />
        <ValidationError prefix="Business" field="business" errors={state.errors} className="text-xs text-red-500 mt-1" />
      </div>

      <div>
        <textarea
          id="project-details"
          name="project_details"
          rows={5}
          required
          className={`${inputClassName} resize-none`}
          placeholder="Tell us about your project"
        />
        <ValidationError prefix="Project details" field="project_details" errors={state.errors} className="text-xs text-red-500 mt-1" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full rounded-xl bg-[#000000] text-[#ffffff] px-4 py-3 text-sm font-semibold hover:bg-[#1a1a1a] transition-colors disabled:opacity-60"
      >
        {state.submitting ? 'Sending...' : 'Send project details'}
      </button>

      {state.succeeded && (
        <p className="text-xs text-green-600 dark:text-green-400">Project enquiry sent successfully.</p>
      )}
      <ValidationError errors={state.errors} className="text-xs text-red-500" />
    </form>
  );
};
