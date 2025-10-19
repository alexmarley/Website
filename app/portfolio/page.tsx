export default function Portfolio() {
  const investments = [
    {
      companyName: "Stealth",
      stageInvested: "Pre-Seed", 
      leadCheck: "No",
      currentStatus: "Seed",
      sourced: "Yes"
    },
    {
      companyName: "Osmosis",
      stageInvested: "Seed",
      leadCheck: "No",
      currentStatus: "Seed",
      sourced: "Yes"
    },
    {
      companyName: "Stealth",
      stageInvested: "Seed", 
      leadCheck: "No",
      currentStatus: "Seed",
      sourced: "Yes"
    },
    {
      companyName: "Stealth",
      stageInvested: "Pre-Seed", 
      leadCheck: "No",
      currentStatus: "Seed",
      sourced: "Yes"
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 leading-relaxed">
      <header className="space-y-2 mb-10">
        <h1 className="text-4xl font-semibold tracking-tight">Portfolio</h1>
        <p className="text-sm text-neutral-500">
          I'll continue to update this page as I make more investments. I've listed the companies in reverse chronological order with my most recent investments at the top.
        </p>
        <p className="text-sm text-neutral-500">
          This was last updated on October 19, 2025.
        </p>
      </header>

      <div className="mt-8">
        <h2 className="text-xl font-medium mb-4">Upfront Ventures</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-neutral-700">
                <th className="text-left py-3 px-4 font-medium text-neutral-300">Company Name</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-300">Stage Invested</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-300">Lead Check</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-300">Current Stage</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-300">Sourced</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-800">
                <td className="py-3 px-4">
                  <span className="font-bold">Coming Soon</span>
                </td>
                <td className="py-3 px-4 text-neutral-300">-</td>
                <td className="py-3 px-4 text-neutral-300">-</td>
                <td className="py-3 px-4 text-neutral-300">-</td>
                <td className="py-3 px-4 text-neutral-300">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-medium mb-4">Angel Investments</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-neutral-700">
                <th className="text-left py-3 px-4 font-medium text-neutral-300">Company Name</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-300">Stage Invested</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-300">Lead Check</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-300">Current Stage</th>
                <th className="text-left py-3 px-4 font-medium text-neutral-300">Sourced</th>
              </tr>
            </thead>
            <tbody>
              {investments.map((investment, index) => (
                <tr key={index} className="border-b border-neutral-800">
                  <td className="py-3 px-4">
                    <span className="font-bold">{investment.companyName}</span>
                  </td>
                  <td className="py-3 px-4 text-neutral-300">{investment.stageInvested}</td>
                  <td className="py-3 px-4 text-neutral-300">{investment.leadCheck}</td>
                  <td className="py-3 px-4 text-neutral-300">{investment.currentStatus}</td>
                  <td className="py-3 px-4 text-neutral-300">{investment.sourced}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <footer className="mt-16 text-sm text-neutral-500">
        © {new Date().getFullYear()} Alex Marley
      </footer>
    </main>
  );
}