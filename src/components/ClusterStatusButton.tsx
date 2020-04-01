import React from "react";
import { useCluster, ClusterStatus, Cluster } from "../providers/cluster";

function ClusterStatusButton({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick}>
      <Button />
    </div>
  );
}

function Button() {
  const { status, cluster, name, customUrl } = useCluster();
  const statusName = cluster !== Cluster.Custom ? `${name}` : `${customUrl}`;

  switch (status) {
    case ClusterStatus.Connected:
      return (
        <span className="btn btn-outline-success lift">
          <span className="fe fe-check-circle mr-2"></span>
          {statusName}
        </span>
      );

    case ClusterStatus.Connecting:
      return (
        <span className="btn btn-outline-warning lift">
          <span
            className="spinner-grow spinner-grow-sm text-warning mr-2"
            role="status"
            aria-hidden="true"
          ></span>
          {statusName}
        </span>
      );

    case ClusterStatus.Failure:
      return (
        <span className="btn btn-outline-danger lift">
          <span className="fe fe-alert-circle mr-2"></span>
          {statusName}
        </span>
      );
  }
}

export default ClusterStatusButton;