import { HackerBtn } from "^/src/shared/ui/hacker-btn"

export const DownloadResumeBtn = () => {
  return (
    <div className="h-fit w-full">
      {/* <Link href="/" className={cn(buttonVariants({ variant: "default", size:"lg"}))}>
      <Download className="mx-1" />
      Download Resume
    </Link> */}
      <HackerBtn label='Download Resume' />
    </div>
  )
}
