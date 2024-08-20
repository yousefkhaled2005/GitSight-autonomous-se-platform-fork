"use client";

import { RepositoryChat } from "@/components/repository-chat";
import { useRepositoryWorkspace } from "@/components/repository-workspace-context";

export default function RepositoryChatPage() {
  const { repositoryId, selectedBranch, detail } = useRepositoryWorkspace();

  if (!detail) return null;

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4">
      <div>
        <h1 className="text-xl font-semibold">AI Chat</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Ask natural-language questions about this repository.
        </p>
      </div>
      <div className="min-h-0 flex-1">
        <RepositoryChat
          repositoryId={repositoryId}
          branch={selectedBranch ?? ("selected_branch" in detail ? detail.selected_branch : null)}
        />
      </div>
    </div>
  );
}
