import axios from "axios";
import { headers } from "next/headers";

export const buildClient = () => {
  let objectHeaders: Record<string, string> = {};
  headers().forEach((value, key) => {
    objectHeaders[key] = value;
  });

  if (typeof window === "undefined") {
    return axios.create({
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      headers: objectHeaders,
    });
  } else {
    return axios.create({
      baseURL: "/",
    });
  }
};
