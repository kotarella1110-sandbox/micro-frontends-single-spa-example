import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@kotarella1110/react-app",
  app: () =>
    System.import(
      "@kotarella1110/react-app"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
