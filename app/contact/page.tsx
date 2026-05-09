import { FaEnvelope, FaMapMarkerAlt, FaUniversity } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#011F5B] border-b-2 border-[#011F5B] pb-2 mb-8">
        Contact
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-[#011F5B] mb-4">
            Principal Investigator
          </h2>
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 space-y-3">
            <p className="font-semibold text-gray-900 text-lg">Dr. Yuanwen Jiang</p>
            <p className="text-gray-600">
              Assistant Professor of Materials Science and Engineering
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaEnvelope className="text-[#011F5B] flex-shrink-0" />
              <a
                href="mailto:ywjiang@seas.upenn.edu"
                className="hover:underline text-blue-700"
              >
                ywjiang@seas.upenn.edu
              </a>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <FaMapMarkerAlt className="text-[#011F5B] flex-shrink-0 mt-0.5" />
              <span>
                LRSM 205
                <br />
                3231 Walnut St
                <br />
                Philadelphia, PA 19104
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaUniversity className="text-[#011F5B] flex-shrink-0" />
              <a
                href="https://www.seas.upenn.edu/~ywjiang"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-700"
              >
                Faculty profile ↗
              </a>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#011F5B] mb-4">
            Lab Location
          </h2>
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
            <p className="font-semibold text-gray-900 mb-1">
              Laboratory for Research on the Structure of Matter (LRSM)
            </p>
            <p className="text-gray-600 text-sm mb-4">
              3231 Walnut Street
              <br />
              Philadelphia, PA 19104
            </p>
            <div className="aspect-video rounded overflow-hidden bg-gray-200">
              <iframe
                title="Map to Jiang Group Lab"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.5!2d-75.1941!3d39.9522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c65b5f3d3925%3A0x95fd26f1bb48a54!2sLRSM%2C%203231%20Walnut%20St%2C%20Philadelphia%2C%20PA%2019104!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-[#011F5B]/5 rounded-lg p-6 border border-[#011F5B]/20">
        <h2 className="text-xl font-semibold text-[#011F5B] mb-2">
          Prospective Students &amp; Postdocs
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          We are always looking for motivated and talented individuals to join our group.
          If you are interested in joining the Jiang Group as a PhD student, postdoctoral
          researcher, or undergraduate researcher, please send your CV and a brief
          description of your research interests to{" "}
          <a
            href="mailto:ywjiang@seas.upenn.edu"
            className="text-blue-700 hover:underline"
          >
            ywjiang@seas.upenn.edu
          </a>
          .
        </p>
      </div>
    </div>
  );
}
