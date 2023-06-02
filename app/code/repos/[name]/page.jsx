import Repo from "@/app/components/Repo";
import RepoDir from "@/app/components/RepoDir";
import Link from "next/link";
import { Suspense } from "react";
import { FaArrowLeft } from "react-icons/fa";

const SingleRepoPage = ({ params: { name } }) => {
  return (
    <>
      <div className="bg-slate-100 p-4 my-4 rounded-md flex flex-col gap-3 shadow-sm">
        <Suspense fallback={<div>Loading Repository...</div>}>
          <Repo name={name} />
        </Suspense>
        <Suspense fallback={<div>Loading Directories...</div>}>
          <RepoDir name={name} />
        </Suspense>
      </div>
      <Link href="/code/repos" className="flex items-center gap-2 justify-end">
        <FaArrowLeft /> Back to Repositories
      </Link>
    </>
  );
};

export default SingleRepoPage;
