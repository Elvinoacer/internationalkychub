import {
  AddIcon,
  ArticleIcon,
  AttachFileIcon,
  CancelIcon,
  CloseIcon,
  ExpandMoreIcon,
  PersonOffIcon,
  SearchIcon,
  SendIcon,
  VisibilityOffIcon,
} from "@/app/components/icons";
import Image from "next/image";

export default function SupportManagementPage() {
  return (
    <main className="flex-1 flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <TicketList />
        <TicketDetail />
        <ManagementPanel />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between gap-4 p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#151C2C] shrink-0">
      <h1 className="text-2xl font-bold tracking-tight">Support Management</h1>
      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center gap-2 h-10 px-4 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90">
          <AddIcon className="text-base" />
          <span className="truncate">Create New Ticket</span>
        </button>
        <div className="w-10 h-10 rounded-full bg-cover bg-center">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8qaEJ__7qlpEKm4OcdVkK17Kw36nljhB5ddGin7IOnuvJm0qKGYUOIONrCD2YJDncMeELWJHY6jfzxCYqK-ipNLgpi50J0jiqiAtdG3NjB7FOVuKrpl2hwY6G52RBv75mL_TZXykOZFAkhBEIrGPb3o1-hcvNjquCcMCZxbHQ2DkJ6jXi_LpFXxpkcEk9sY6jP7S_yyjDg1RPVKt2EUuzNjxz-OowSpfavMq--DltW22YKUAVaNEAlSf7lsOg3-_PYocE4ugEqoA"
            alt="User avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
}

function TicketList() {
  return (
    <div className="w-1/3 flex flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#151C2C] overflow-y-auto">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 space-y-3 shrink-0">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            className="form-input w-full pl-10 h-10 rounded-lg bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary text-sm"
            placeholder="Search by keyword, ID, email..."
            type="text"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          <button className="flex items-center gap-1.5 h-8 px-3 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm shrink-0">
            Status: All <ExpandMoreIcon className="text-base" />
          </button>
          <button className="flex items-center gap-1.5 h-8 px-3 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm shrink-0">
            Priority: All <ExpandMoreIcon className="text-base" />
          </button>
          <button className="flex items-center gap-1.5 h-8 px-3 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm shrink-0">
            Assignee: All <ExpandMoreIcon className="text-base" />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <TicketItem
          id="TKT-001"
          title="Verification Issue"
          user="John Doe"
          email="john.doe@example.com"
          time="2h ago"
          status="In Progress"
          priority="High"
          assigneeAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDjEU-OVBw9J3LD-Pppe2vYTMoCWqm34m89KKPTRl2-tFLnSdavR4-KwSk9MjocrDw13igmpAiKReYENfMypboD7BiHj0OgDo_EEBxyJtJFWXQxi9MwJn1coO8uqDwU_WemuTSMyoy9b6OlHVLBQKvSvwKJ288oTuagaGkvRRKYm4r8ft0UlS0REmmaE4ObD5-FK7LGcPfQnXJmICibG2hQsDEdD3kaGDc4vB0OJAfWN_uAbqFR4oqTMHYzN__kWjL-U6w8GOcYDj8"
          active
        />
        <TicketItem
          id="TKT-002"
          title="Login Problem"
          user="Alice Williams"
          time="1d ago"
          status="Open"
          priority="Medium"
        />
        <TicketItem
          id="TKT-003"
          title="Document Upload Failed"
          user="Bob Johnson"
          time="3d ago"
          status="Resolved"
          priority="Low"
          assigneeAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuBuKZCj0MUplWdfpvmoexULJ-YnMlsnRwG3bo4z8ArlEbqMBLdAqa_U0JpEMi8TZTqK-bPErTTVGw7QlLzKsOKuRuB3vExzPaOldTNi0K0WrDUe4Ed89DQLYViL3RusmlXxNvoJx84mUzG4gy9JG-HIobQG2F3eFlDmmAvk3BG6hd3TuYVnjwvEzHEiK9Wf_UXwPcsap1rd4RXwoAL2AJZ2xjS9WROd8qLdcgh3R5iM25Q1YTZjvjFJgJvT9JA7Ph_U9CU5sBnuoKk"
        />
      </div>
    </div>
  );
}

function TicketItem({
  id,
  title,
  user,
  email,
  time,
  status,
  priority,
  assigneeAvatar,
  active,
}: {
  id: string;
  title: string;
  user: string;
  email?: string;
  time: string;
  status: string;
  priority: string;
  assigneeAvatar?: string;
  active?: boolean;
}) {
  const statusColors: { [key: string]: string } = {
    "In Progress":
      "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300",
    Open: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
    Resolved:
      "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
  };
  const priorityColors: { [key: string]: string } = {
    High: "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300",
    Medium:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300",
    Low: "bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300",
  };

  return (
    <div
      className={`flex gap-4 p-4 border-b border-gray-200 dark:border-gray-800 cursor-pointer ${
        active
          ? "bg-primary/10 dark:bg-primary/20 border-l-4 border-secondary dark:border-secondary"
          : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
      }`}
    >
      <input
        className="form-checkbox mt-1 h-4 w-4 rounded text-secondary focus:ring-secondary/50 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
        type="checkbox"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <p className="font-bold text-sm">
            {id}: {title}
          </p>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {time}
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {user} {email && `- ${email}`}
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <span
              className={`px-2 py-0.5 text-xs font-medium rounded-full ${statusColors[status]}`}
            >
              {status}
            </span>
            <span
              className={`px-2 py-0.5 text-xs font-medium rounded-full ${priorityColors[priority]}`}
            >
              {priority}
            </span>
          </div>
          {assigneeAvatar ? (
            <div className="w-6 h-6 rounded-full bg-cover bg-center">
              <Image
                src={assigneeAvatar}
                alt="Assignee avatar"
                width={24}
                height={24}
                className="rounded-full"
              />
            </div>
          ) : (
            <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
              <PersonOffIcon className="text-sm" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TicketDetail() {
  return (
    <div className="w-2/3 flex flex-col bg-background-light dark:bg-background-dark overflow-y-auto">
      <div className="flex-1 p-6 space-y-6">
        <UserMessage />
        <AdminReply />
        <InternalNote />
      </div>
      <ReplyEditor />
    </div>
  );
}

function UserMessage() {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-full bg-cover bg-center shrink-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRQwEVexaMmFg9hwauL-coR0kpQIdYSIV5MLozOU559qM7-T_xSh4B_ZnRtvdvqXBjiK_cf_v0mHtysvSZlGJF9x6lgIM1UxHFbW9N0e-cYbDh_SOvgEXa4RUX2mV6xQVkXxsd_rLmMafornU9EsbC6sr5yidPZJkWME7ij4h-PAGVyMj-ibfAl5lvkMRhTKb4-dRK3_rPdsIqpRWWB_tI2ipBdmbGGfuGRnFAJBENlRXOPyj6l9PshtrSPEOKEnw-ekfu0VnkCk0"
          alt="Avatar of John Doe"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="flex-1 bg-white dark:bg-[#151C2C] p-4 rounded-lg rounded-tl-none border border-gray-200 dark:border-gray-800">
        <div className="flex justify-between items-center mb-1">
          <p className="font-bold">John Doe</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Today at 2:45 PM
          </p>
        </div>
        <p className="text-sm">
          Hello, I'm having trouble with my identity verification. I've uploaded
          my passport multiple times, but it keeps getting rejected. Can you
          please help me understand what I'm doing wrong? I need to get this
          sorted out as soon as possible. Thanks!
        </p>
      </div>
    </div>
  );
}

function AdminReply() {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-1 bg-secondary/10 dark:bg-secondary/20 p-4 rounded-lg rounded-tr-none border border-secondary/20 dark:border-secondary/30">
        <div className="flex justify-between items-center mb-1">
          <p className="font-bold text-secondary">Jane Smith (Support)</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Today at 3:15 PM
          </p>
        </div>
        <p className="text-sm">
          Hi John, I'm sorry to hear you're having trouble. I've reviewed your
          recent uploads. It looks like the issue is due to glare on the
          passport photo page, which is obscuring some of the details. Please
          try taking a new photo in a well-lit room without direct flash. Let me
          know if that works!
        </p>
      </div>
      <div className="w-10 h-10 rounded-full bg-cover bg-center shrink-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK0ALbtegX9o7wF2ymSD6HXgz8JXpgkMEoI_7PS0hfnPg0c6vB40Ss88k34efPi3J3DDTJJsCzWl-yTP-VCe798P6gw9eUWUp4iNfaX9h2Qn89pfKyAzy7KNUGdtXJr3I3og7MAE95uv5oI6x3ixGGXQINV8xeibZxILEClLEDwy0EwvysvNieLvVa45WXjAqr8VgxyEHujqgo1-UdEe8D63BnYtHAc1wBJyme4vlmLgWXiDxH6NCdSqmpAgjKJoNHvbTrEI5Sfe4"
          alt="Avatar of Jane Smith"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </div>
  );
}

function InternalNote() {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-10 text-center">
        <VisibilityOffIcon className="text-yellow-500" />
      </div>
      <div className="flex-1 bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800/50">
        <div className="flex justify-between items-center mb-1">
          <p className="font-bold text-yellow-800 dark:text-yellow-300">
            Internal Note by Jane Smith
          </p>
          <p className="text-xs text-yellow-600 dark:text-yellow-400">
            Today at 3:16 PM
          </p>
        </div>
        <p className="text-sm text-yellow-700 dark:text-yellow-200">
          User seems frustrated. Prioritizing this ticket to ensure a quick
          resolution and maintain a positive experience.
        </p>
      </div>
    </div>
  );
}

function ReplyEditor() {
  return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#151C2C] space-y-3">
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <button className="px-4 py-2 text-sm font-medium border-b-2 border-secondary text-secondary">
          Reply
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-text-light dark:hover:text-text-dark">
          Add Internal Note
        </button>
      </div>
      <textarea
        className="form-textarea w-full rounded-lg bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary text-sm"
        placeholder="Type your response here..."
        rows={4}
      ></textarea>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400">
            <AttachFileIcon />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400">
            <ArticleIcon />
          </button>
        </div>
        <button className="flex items-center justify-center gap-2 h-10 px-6 bg-secondary text-white rounded-lg text-sm font-medium hover:bg-secondary/90">
          <span className="truncate">Send Reply</span>
          <SendIcon className="text-base" />
        </button>
      </div>
    </div>
  );
}

function ManagementPanel() {
  return (
    <div className="w-1/4 flex flex-col border-l border-gray-200 dark:border-gray-800 bg-white dark:bg-[#151C2C] overflow-y-auto p-6 space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
          Requester
        </h3>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-cover bg-center">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUC-d8HR-uIV8qn2ICI3fwRB-sejVHzyPYjJqAWRhyUgnr_2AOrnZMh6EWrvKNQrt_dUc-hTzZ5IaW6S0R0rsX2C5JoImT6GUC16mrGGFLmfjH8It5OKsVYaKjsMZJ71IaSoBkU8qVv9TyP1_XCAHKjGUjF8-dVWvg7pFFsbC8LuvDcrZFivyVRaNvBoF__7snKrtwmGPBWDJ8FOf9Q6epBQsVNOgMDkeQ7csJtSgVB7b4GZ3IqbZ4BQ_xxosv6ZxmM59LctjGKg8"
              alt="Avatar of John Doe"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="font-bold">John Doe</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              john.doe@example.com
            </p>
            <a className="text-sm text-secondary hover:underline" href="#">
              View KYC Profile
            </a>
          </div>
        </div>
      </div>
      <div>
        <label
          className="block text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2"
          htmlFor="assignee"
        >
          Assignee
        </label>
        <select
          className="form-select w-full rounded-lg bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary text-sm"
          id="assignee"
        >
          <option>Unassigned</option>
          <option selected>Jane Smith</option>
          <option>Mike Brown</option>
        </select>
      </div>
      <div>
        <label
          className="block text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2"
          htmlFor="status"
        >
          Status
        </label>
        <select
          className="form-select w-full rounded-lg bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary text-sm"
          id="status"
        >
          <option>Open</option>
          <option selected>In Progress</option>
          <option>Pending</option>
          <option>Resolved</option>
        </select>
      </div>
      <div>
        <label
          className="block text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2"
          htmlFor="priority"
        >
          Priority
        </label>
        <select
          className="form-select w-full rounded-lg bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary text-sm"
          id="priority"
        >
          <option>Low</option>
          <option>Medium</option>
          <option selected>High</option>
          <option>Urgent</option>
        </select>
      </div>
      <div>
        <label
          className="block text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2"
          htmlFor="tags"
        >
          Tags
        </label>
        <div className="flex flex-wrap gap-2">
          <span className="flex items-center bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-sm font-medium px-2.5 py-1 rounded-full">
            Onboarding{" "}
            <button className="ml-1.5 text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-200">
              <CloseIcon className="text-sm" />
            </button>
          </span>
          <span className="flex items-center bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300 text-sm font-medium px-2.5 py-1 rounded-full">
            Verification Issue{" "}
            <button className="ml-1.5 text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-200">
              <CloseIcon className="text-sm" />
            </button>
          </span>
        </div>
        <input
          className="form-input w-full mt-2 rounded-lg bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary text-sm"
          id="tags"
          placeholder="Add a tag..."
          type="text"
        />
      </div>
      <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
        <button className="w-full flex items-center justify-center gap-2 h-10 px-4 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700">
          <CancelIcon className="text-base" />
          <span className="truncate">Close Ticket</span>
        </button>
      </div>
    </div>
  );
}
