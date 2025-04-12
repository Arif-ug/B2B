import { useRouter } from 'next/router';

const ProjectDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Project: {slug}</h1>
      <p className="mt-4">Details about the project will go here.</p>
    </div>
  );
};

export default ProjectDetail;
