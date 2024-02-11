"use client";

import { usePathname } from "next/navigation";

function PostPage({ params }: { params: { id: string } }) {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <div>
      <h2 className="text-lg">صفحه پست</h2>
      <p>شناسه پست : {params.id}</p>
    </div>
  );
}

export default PostPage;
