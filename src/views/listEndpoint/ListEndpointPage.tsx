import { Outlet, useMatches, useNavigate } from "@tanstack/react-router";

import MainLayout from "@/components/MainLayout";
import Badge from "@/components/badge/HeadBadge";
import SidebarItems from "@/utils/SidebarItems";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CollaborationCard } from "@/components/card/CollaborationCard";

const ListEndpoint = () => {
  const navigate = useNavigate();
  const matches = useMatches();
  const isDetailPage = matches.some((match) =>
    match.routeId.includes("detail-endpoint")
  );

  if (isDetailPage) {
    return <Outlet />;
  }

  return (
    <MainLayout>
      <div className="w-full h-full flex justify-center items-start overflow-x-hidden">
        <div className="max-w-8xl w-full px-4 md:px-10 py-4 flex flex-col gap-4">
          <div className="flex flex-wrap items-baseline justify-baseline p-4 rounded-lg shadow-md w-full border-b-2 border-b-[var(--color-card)] space-x-2">
            {SidebarItems.map((item) => {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="flex items-center cursor-pointer"
                >
                  <Badge title={item.label} />
                </a>
              );
            })}
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-4 w-full px-4 pb-4 rounded-lg shadow-md border-b-2 border-b-[var(--color-card)]">
            <div className="flex w-[20rem] items-center gap-2">
              <Input
                placeholder="Search"
                className="bg-neutral-100 text-black rounded-2xl indent-1"
              />
            </div>
            <div className="flex items-center justify-end gap-2">
              <Button
                variant="link"
                title="Create New"
                className="bg-black hover:bg-neutral-700 text-white cursor-pointer rounded-[0.5rem]"
              />
            </div>
          </div>
          <div className="w-full border-b-2 border-b-[var(--color-card)]"></div>
          <div className="flex flex-col gap-4 w-full pb-4 rounded-lg shadow-md ">
            <div className="flex flex-col items-center justify-between gap-4 w-full px-4 pb-4 rounded-lg shadow-md border-b-2 border-b-[var(--color-card)]">
              <CollaborationCard
                title="Endpoint 1"
                subtitle="Description of endpoint 1"
                team="Team A"
                onShowMore={() =>
                  navigate({
                    to: "/list-endpoint/detail-endpoint/$team",
                    params: { team: "Team-A" },
                  })
                }
              />
              <CollaborationCard
                title="Endpoint 2"
                subtitle="Description of endpoint 2"
                team="Team B"
                onShowMore={() =>
                  navigate({
                    to: "/list-endpoint/detail-endpoint/$team",
                    params: { team: "Team-B" },
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ListEndpoint;
