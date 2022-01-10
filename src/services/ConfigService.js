import platform from '../PLATFORM.json';
import config from '../CONFIG.json';

const PLATFORM = platform.name;

const FetchConfig = () => {
  const data = config.map((platform) => {
    if (platform.env === PLATFORM) {
      return {
        environment: platform.env,
        apiUrl: platform.info.apiUrl,
        userName: platform.info.userName,
        passWord: platform.info.passWord,
        perPage: platform.info.perPage,
      };
    }
  });

  return data;
};

const data = FetchConfig();
const confData = data.filter((d) => {
  return d !== undefined;
});
export default confData[0];
