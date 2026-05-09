export default function Footer() {
  return (
    <footer className="bg-[#011F5B] text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-white font-semibold mb-2">Jiang Group</h3>
            <p className="text-sm">
              Department of Materials Science and Engineering
              <br />
              University of Pennsylvania
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Location</h3>
            <p className="text-sm">
              LRSM 205
              <br />
              3231 Walnut St
              <br />
              Philadelphia, PA 19104
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Contact</h3>
            <p className="text-sm">
              <a
                href="mailto:ywjiang@seas.upenn.edu"
                className="hover:text-white transition-colors"
              >
                ywjiang@seas.upenn.edu
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-white/20 mt-6 pt-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Jiang Group, University of Pennsylvania. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
