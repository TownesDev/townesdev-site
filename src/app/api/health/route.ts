export function GET() {
  return Response.json(
    {
      status: "ok",
      service: "townesdev-site",
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
