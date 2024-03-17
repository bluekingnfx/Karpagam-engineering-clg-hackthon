import {useRouter} from "next"


export default function Home() {
  const router = useRouter()
  router.push("/login")
  return <>
    Loading...
  </>
}