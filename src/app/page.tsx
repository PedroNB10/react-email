


import Forms from "./components/Forms";

import { getConfigIds } from './config'

import { ConfigIds } from './config'

export default function Home() {

  const config: ConfigIds = getConfigIds()

  console.log(config)



  return (
    <main>
      <Forms SERVICE_ID={config.SERVICE_ID} TEMPLATE_ID={config.TEMPLATE_ID} PUBLIC_KEY={config.PUBLIC_KEY} />
    </main>
  );
}
