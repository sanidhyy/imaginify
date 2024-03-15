import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { getUserById } from "@/actions/user.action";
import { Header } from "@/components/shared/header";
import { TransformationForm } from "@/components/shared/transformation-form";
import { transformationTypes } from "@/constants";

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const { userId } = auth();
  const transformation = transformationTypes[type];

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
};

export default AddTransformationTypePage;
