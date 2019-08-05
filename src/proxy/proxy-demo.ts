import { ProxyService } from "./ProxyService";

// THIS EXAMPLE NEEDS TO BE TESTED ONLINE BY `npm start` and browser console log.

export const proxyDemo = () => {
  const service = new ProxyService();

  for (let i = 1; i <= 5; i++) {
    service.getData(i).then(data => {
      console.log(data);
    });
  }

  // demo later requests
  setTimeout(() => {
    for (let i = 1; i <= 8; i++) {
      const id = i % 5;
      service.getData(id).then(data => {
        console.log(data);
      });
    }
  }, 1000);

}
