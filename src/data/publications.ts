export enum ReviewState {
  'SUBMITTED',
  'ACCEPTED',
  'PUBLISHED',
}

export interface Publication {
  authors: string;
  title: string;
  href: string;
  reviewState: ReviewState;
  venue: string;
  venueHref?: string;
  year: number;
}

export interface PublicationDict {
  theses: Publication[];
  booksAndJournals: Publication[];
  conferencePapers: Publication[];
  presentations?: Publication[];
}

export const publications: PublicationDict = {
  theses: [
    {
      authors: 'A. Schlapbach',
      title: 'Writer Identification and Verification',
      href: 'https://www.iospress.com/node15242/books/writer-identification-and-verification',
      reviewState: ReviewState.PUBLISHED,
      venue: 'Universität Bern',
      year: 2008,
    },
    {
      authors: 'A. Schlapbach',
      title: 'Enabling White-Box Reuse in a Pure Composition Language',
      href: '/papers/master-thesis-2002.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue: 'University of Bern',
      year: 2002,
    },
    {
      authors: 'A. Schlapbach',
      title: 'Generic XMI Support for the MOOSE Reengineering Environment',
      href: '/papers/bachelor-thesis-2001.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue: 'University of Bern',
      year: 2001,
    },
  ],
  booksAndJournals: [
    {
      authors: 'A.Schlapbach',
      title: 'Writer Identification and Verification',
      href: '',
      reviewState: ReviewState.PUBLISHED,
      venue: 'IOS Press',
      year: 2008,
    },
    {
      authors: 'A. Schlapbach',
      title: 'Machine Learning in Document Analysis and Recognition',
      href: '/papers/ml-document-analysis-book-2007.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue: 'Springer',
      year: 2007,
    },
    {
      authors: 'M. Liwicki, A. Schlapbach, and H. Bunke',
      title:
        'Automatic Gender Detection Using On-line and Off-line Information',
      href: 'https://doi.org/10.1007/s10044-010-0178-6',
      reviewState: ReviewState.PUBLISHED,
      venue: 'Pattern Analysis and Applications',
      year: 2011,
    },
    {
      authors: 'A. Schlapbach, M. Liwicki, and H. Bunke',
      title:
        'Automatic Gender Detection — Combining On-Line and Off-Line Systems',
      href: '/papers/gender-detection-ijprai-2008.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue:
        'International Journal of Pattern Recognition and Artificial Intelligence',
      year: 2008,
    },
    {
      authors: 'A. Schlapbach, M. Liwicki, and H. Bunke',
      title: 'A Writer Identification System for On-line Whiteboard Data',
      href: '/papers/online-wi-pattern-recognition-2008.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue: 'Pattern Recognition',
      year: 2008,
    },
    {
      authors: 'A. Schlapbach and H. Bunke',
      title:
        'A Writer Identification and Verification System Using HMM Based Recognizers',
      href: '/papers/wi-hmm-paa-2007.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue: 'Pattern Analysis & Applications',
      year: 2007,
    },
    {
      authors: 'A. Schlapbach and H. Bunke',
      title:
        'Off-line Writer Identification and Verification Using Gaussian Mixture Models',
      href: '/papers/offline-wi-gmm-springer-2008.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue: 'Machine Learning in Document Analysis and Recognition',
      year: 2007,
    },
  ],
  conferencePapers: [
    {
      authors: 'A. Schlapbach',
      title:
        'Formal Semantics for Agentic Tool Protocols: A Process Calculus Approach',
      href: 'https://github.com/schlpbch/publications/blob/main/conference-papers/express-sos-2026.pdf',
      reviewState: ReviewState.SUBMITTED,
      venue: 'EXPRESS/SOS 2026',
      venueHref: 'https://expresssos.github.io/',
      year: 2026,
    },
    {
      authors: 'A. Schlapbach',
      title:
        'The Convergence of SGD and MCP: A New Paradigm for Agentic Interoperability',
      href: 'https://arxiv.org/abs/2602.18764',
      reviewState: ReviewState.SUBMITTED,
      venue: 'EMNLP 2026',
      venueHref: 'https://2026.emnlp.org',
      year: 2026,
    },
    {
      authors: 'A. Schlapbach',
      title:
        'Co-linearity and Cluster Stability in Transport Economics: Evidence from Aviation and Rail',
      href: 'https://arxiv.org/abs/2605.67890',
      reviewState: ReviewState.SUBMITTED,
      venue: 'Transportation Research Part B',
      venueHref:
        'https://www.journals.elsevier.com/transportation-research-part-b-methodological',
      year: 2026,
    },
    {
      authors: 'A. Schlapbach',
      title:
        'Orthogonality and Dimensionality in Airline Cluster Analysis using PCA and Kernel PCA',
      href: 'http://arxiv.org/abs/2606.08322',
      reviewState: ReviewState.PUBLISHED,
      venue: 'S+SSPR 2026',
      venueHref: 'https://ssspr2026.inf.unibe.ch/',
      year: 2026,
    },
    {
      authors: 'A. Schlapbach, F. Wettstein, and H. Bunke',
      title: 'Automatic Estimation of the Readability of Handwritten Text',
      href: '/papers/readability-eusipco-2008.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue: 'European Signal Processing Conference',
      year: 2008,
    },
    {
      authors: 'A. Schlapbach, F. Wettstein, and H. Bunke',
      title:
        'Estimating the Readability of Handwritten Text — A Support Vector Regression Based Approach',
      href: '/papers/readability-svr-icpr-2008.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue: 'International Conference on Pattern Recognition',
      year: 2008,
    },
    {
      authors: 'A. Schlapbach, F. Wettstein, and H. Bunke',
      title:
        'Estimating the Readability of Handwritten Text — A Support Vector Regression Based Approach',
      href: '/papers/readability-svr-icfhr-2008.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue: 'International Conference on Frontiers in Handwriting Recognition',
      year: 2008,
    },
    {
      authors: 'M. Liwicki, A. Schlapbach, and H. Bunke',
      title:
        'Writer-Dependent Recognition of Handwritten Whiteboard Notes in Smart Meeting Room Environments',
      href: '/papers/wi-whiteboard-das-2008.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue: 'IAPR Workshop on Document Analysis Systems',
      year: 2008,
    },
    {
      authors: 'A. Schlapbach and H. Bunke',
      title:
        'Fusing Asynchronous Feature Streams for On-line Writer Identification',
      href: '/papers/fusing-streams-icdar-2007.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue: 'International Conference on Document Analysis and Recognition',
      year: 2007,
    },
    {
      authors: 'A. Schlapbach, M. Liwicki, P. Loretan, and H. Bunke',
      title:
        'Automatic Detection of Gender and Handedness from On-Line Handwriting',
      href: '/papers/gender-handedness-igs-2007.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue: 'International Graphonomics Society',
      year: 2007,
    },
    {
      authors:
        'M. Liwicki, A. Schlapbach, H. Bunke, S. Bengio, J. Mariéthoz, and J. Richiardi',
      title: 'Writer Identification for Smart Meeting Room Systems',
      href: '/papers/wi-smart-meeting-das-2006.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue: 'IAPR Workshop on Document Analysis Systems',
      year: 2006,
    },
    {
      authors: 'A. Schlapbach and H. Bunke',
      title: 'Off-line Writer Identification Using Gaussian Mixture Models',
      href: '/papers/offline-wi-gmm-icpr-2006.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue: 'International Conference on Pattern Recognition',
      year: 2006,
    },
    {
      authors: 'A. Schlapbach and H. Bunke',
      title:
        'Off-line Writer Verification: A Comparison of an HMM and a GMM Based System',
      href: '/papers/offline-wi-verification-iwfhr-2006.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue: 'International Workshop on Frontiers in Handwriting Recognition',
      year: 2006,
    },
    {
      authors: 'A. Schlapbach, V. Kilchherr, and H. Bunke',
      title:
        'Improving Writer Identification by Means of Feature Selection and Extraction',
      href: '/papers/improving-wi-icdar-2005.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue: 'International Conference on Document Analysis and Recognition',
      year: 2005,
    },
    {
      authors: 'A. Schlapbach and H. Bunke',
      title:
        'Writer Identification Using an HMM-Based Handwriting Recognition System',
      href: '/papers/wi-hmm-graphonomics-2005.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue: 'International Graphonomics Society',
      year: 2005,
    },
    {
      authors: 'A. Schlapbach and H. Bunke',
      title: 'Off-line Handwriting Identification Using HMM Based Recognizers',
      href: '/papers/offline-hi-hmm-icpr-2004.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue: 'International Conference on Pattern Recognition',
      year: 2004,
    },
    {
      authors: 'A. Schlapbach and H. Bunke',
      title:
        'Using HMM Based Recognizers for Writer Identification and Verification',
      href: '/papers/wi-hmm-recognizers-iwfhr-2004.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue: 'International Workshop on Frontiers in Handwriting Recognition',
      year: 2004,
    },
  ],
  presentations: [
    {
      authors: 'A. Schlapbach and H. Bunke',
      title:
        'Off-line Writer Verification: A Comparison of an HMM and a GMM Based System',
      href: '/papers/wi-verification-slides-iwfhr-2006.pdf',
      reviewState: ReviewState.PUBLISHED,
      venue: 'International Workshop on Frontiers in Handwriting Recognition',
      year: 2006,
    },
  ],
};
