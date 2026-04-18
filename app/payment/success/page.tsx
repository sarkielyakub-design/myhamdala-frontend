export default function Page({
  searchParams,
}: {
  searchParams: { reference?: string };
}) {
  const reference = searchParams?.reference;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0F19] text-white px-6">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 text-center">

        {!reference && (
          <>
            <h1 className="text-3xl text-red-400 mb-4">
              ❌ Invalid Payment
            </h1>
            <p className="text-gray-300">Missing reference</p>
          </>
        )}

        {reference && (
          <>
            <h1 className="text-3xl text-yellow-400 mb-4">
              ⏳ Processing Payment...
            </h1>

            <p className="text-gray-400 mb-6">
              Please wait while we confirm your booking
            </p>

            {/* SIMPLE CLIENT SIDE SCRIPT */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  fetch("https://travel-backend-oo52.onrender.com/api/v1/bookings/verify/${reference}")
                    .then(() => {
                      document.body.innerHTML = "<h1 style='color:green;text-align:center;margin-top:40vh;'>✅ Payment Successful</h1>";
                    })
                    .catch(() => {
                      document.body.innerHTML = "<h1 style='color:red;text-align:center;margin-top:40vh;'>❌ Payment Failed</h1>";
                    });
                `,
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}