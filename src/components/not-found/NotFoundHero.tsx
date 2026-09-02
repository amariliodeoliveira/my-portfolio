import RouteStatusHero from "@/components/layout/RouteStatusHero";
import BackToHomeLink from "@/components/ui/BackToHomeLink";

export default function NotFoundHero() {
  return (
    <RouteStatusHero
      headingId="not-found-heading"
      title="Oops! Error 404"
      description={
        <>
          It seems the page you&apos;re looking for doesn&apos;t exist or has
          been moved.
        </>
      }
      icon="line-md:alert-circle"
      animatedIcon="line-md:alert-circle-loop"
      iconClassName="text-error"
      titleClassName="to-error"
      actions={<BackToHomeLink />}
    />
  );
}
