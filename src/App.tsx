function App() {
  return (
    <div className="min-h-screen bg-[#f2f3f3]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* Fever Header */}
      <header className="bg-white px-4 py-3 flex items-center justify-between border-b border-[#e8eaec] sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold text-[#eb0052] italic tracking-tight">fever</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-[#536b75]">Fabrik Table</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-sm border border-[#e8eaec] p-8">
          <h1 className="text-2xl font-bold text-[#031419] mb-4">
            Fever Fabrik Table
          </h1>
          <p className="text-[#536b75] mb-6">
            Your new prototype is ready. Start building!
          </p>
          
          {/* Example Card */}
          <div className="bg-[#f8f9fa] rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-[#031419] mb-2">Getting Started</h2>
            <ul className="text-sm text-[#536b75] space-y-2">
              <li>Edit <code className="bg-white px-2 py-1 rounded text-[#eb0052]">src/App.tsx</code> to build your UI</li>
              <li>Run <code className="bg-white px-2 py-1 rounded text-[#eb0052]">npm run dev</code> to see changes live</li>
              <li>Run <code className="bg-white px-2 py-1 rounded text-[#eb0052]">npm run deploy</code> to publish</li>
            </ul>
          </div>

          {/* Fever Colors Reference */}
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#eb0052] mx-auto mb-2"></div>
              <span className="text-xs text-[#536b75]">Fever Red</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#0079ca] mx-auto mb-2"></div>
              <span className="text-xs text-[#536b75]">Fever Blue</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#18824c] mx-auto mb-2"></div>
              <span className="text-xs text-[#536b75]">Fever Green</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#6f41d7] mx-auto mb-2"></div>
              <span className="text-xs text-[#536b75]">Fever Purple</span>
            </div>
          </div>
        </div>

        <p className="text-center text-[#a7b2ba] text-xs mt-8">
          Fever Design Team • 2026
        </p>
      </main>
    </div>
  )
}

export default App
