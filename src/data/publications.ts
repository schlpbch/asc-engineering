export interface Publication {
  text: string;
  href?: string;
}

export const publications = {
  theses: [
    {
      text: 'A. Schlapbach: Writer Identification and Verification. PhD thesis, Universität Bern, 2008. Published as a book by IOS Press (DISKI series, ISBN: 978-1-58603-825-0).',
    },
    {
      text: 'A. Schlapbach: Enabling White-Box Reuse in a Pure Composition Language. Diplomarbeit, University of Bern, 2002.',
      href: '/papers/Schl03a.pdf',
    },
    {
      text: 'A. Schlapbach: Generic XMI Support for the MOOSE Reengineering Environment. Bachelor thesis, University of Bern, 2001.',
      href: '/papers/Schl01a.pdf',
    },
  ],
  inReview: [
    {
      text: 'A. Schlapbach: The Convergence of SGD and MCP: A New Paradigm for Agentic Interoperability. arXiv preprint arXiv:2602.18764, 2026.',
      href: 'https://arxiv.org/abs/2602.18764',
    },
    {
      text: 'A. Schlapbach: Formal Semantics for Agentic Tool Protocols: A Process Calculus Approach. arXiv preprint arXiv:2603.24747, 2026.',
      href: 'https://arxiv.org/abs/2603.24747',
    },
  ],
  booksAndJournals: [
    {
      text: 'A. Schlapbach: Writer Identification and Verification. IOS Press, DISKI series, ISBN: 978-1-58603-825-0, 2008.',
    },
    {
      text: 'A. Schlapbach (ed.): Machine Learning in Document Analysis and Recognition. Book, 2007.',
      href: '/papers/MainLDAR.pdf',
    },
    {
      text: 'M. Liwicki, A. Schlapbach, and H. Bunke: Automatic Gender Detection Using On-line and Off-line Information. Pattern Analysis and Applications, vol. 14(1), pp. 87–92, Springer, 2011.',
      href: 'https://doi.org/10.1007/s10044-010-0178-6',
    },
    {
      text: 'A. Schlapbach, M. Liwicki, and H. Bunke: Automatic Gender Detection — Combining On-Line and Off-Line Systems. International Journal of Pattern Recognition and Artificial Intelligence, 2008.',
      href: '/papers/ijprai2008.pdf',
    },
    {
      text: 'A. Schlapbach, M. Liwicki, and H. Bunke: A Writer Identification System for On-line Whiteboard Data. Pattern Recognition, vol. 41(7), pp. 2381–2397, Elsevier, 2008.',
      href: '/papers/onlineWIJournal.pdf',
    },
    {
      text: 'A. Schlapbach and H. Bunke: A Writer Identification and Verification System Using HMM Based Recognizers. Pattern Analysis & Applications, vol. 10(1), pp. 33–43, Springer, 2007.',
      href: '/papers/journalPaperFinal.pdf',
    },
    {
      text: 'A. Schlapbach and H. Bunke: Off-line Writer Identification and Verification Using Gaussian Mixture Models. In Machine Learning in Document Analysis and Recognition, vol. 11, pp. 409–428, Springer, 2007.',
      href: '/papers/offWriIdeVerGMM.pdf',
    },
  ],
  conferencesPapers: [
    {
      text: 'A. Schlapbach, F. Wettstein, and H. Bunke: Automatic Estimation of the Readability of Handwritten Text. Proc. 16th European Signal Processing Conference, pp. 1–5, 2008.',
      href: '/papers/eusipco08.pdf',
    },
    {
      text: 'A. Schlapbach, F. Wettstein, and H. Bunke: Estimating the Readability of Handwritten Text — A Support Vector Regression Based Approach. Nominated for best paper award. Proc. 19th Int. Conf. on Pattern Recognition, pp. 1–4, 2008.',
      href: '/papers/icpr08.pdf',
    },
    {
      text: 'A. Schlapbach, F. Wettstein, and H. Bunke: Estimating the Readability of Handwritten Text — A Support Vector Regression Based Approach. Proc. 11th Int. Conf. on Frontiers in Handwriting Recognition, 2008.',
      href: '/papers/icfhr08.pdf',
    },
    {
      text: 'M. Liwicki, A. Schlapbach, and H. Bunke: Writer-Dependent Recognition of Handwritten Whiteboard Notes in Smart Meeting Room Environments. Proc. 8th IAPR Workshop on Document Analysis Systems, 2008.',
      href: '/papers/das08.pdf',
    },
    {
      text: 'A. Schlapbach and H. Bunke: Fusing Asynchronous Feature Streams for On-line Writer Identification. Proc. 9th Int. Conf. on Document Analysis and Recognition, pp. 103–107, 2007.',
      href: '/papers/icdar07.pdf',
    },
    {
      text: 'A. Schlapbach, M. Liwicki, P. Loretan, and H. Bunke: Automatic Detection of Gender and Handedness from On-Line Handwriting. Proc. 13th Conf. Int. Graphonomics Society, 2007.',
      href: '/papers/igs07.pdf',
    },
    {
      text: 'M. Liwicki, A. Schlapbach, H. Bunke, et al.: Writer Identification for Smart Meeting Room Systems. Proc. 7th IAPR Workshop on Document Analysis Systems, pp. 186–195, 2006.',
      href: '/papers/LNCS-3872.pdf',
    },
    {
      text: 'A. Schlapbach and H. Bunke: Off-line Writer Identification Using Gaussian Mixture Models. Proc. 18th Int. Conf. on Pattern Recognition, pp. 992–995, 2006.',
      href: '/papers/icpr06.pdf',
    },
    {
      text: 'A. Schlapbach and H. Bunke: Off-line Writer Verification: A Comparison of an HMM and a GMM Based System. Proc. 10th Int. Workshop on Frontiers in Handwriting Recognition, pp. 275–280, 2006.',
      href: '/papers/iwfhr06.pdf',
    },
    {
      text: 'A. Schlapbach, V. Kilchherr, and H. Bunke: Improving Writer Identification by Means of Feature Selection and Extraction. Proc. 8th Int. Conf. on Document Analysis and Recognition, pp. 131–135, 2005.',
      href: '/papers/icdar05.pdf',
    },
    {
      text: 'A. Schlapbach and H. Bunke: Writer Identification Using an HMM-Based Handwriting Recognition System. Proc. 12th Conf. Int. Graphonomics Society, pp. 138–142, 2005.',
      href: '/papers/igs05.pdf',
    },
    {
      text: 'A. Schlapbach and H. Bunke: Off-line Handwriting Identification Using HMM Based Recognizers. Proc. 17th Int. Conf. on Pattern Recognition, pp. 654–658, 2004.',
      href: '/papers/icpr04.pdf',
    },
    {
      text: 'A. Schlapbach and H. Bunke: Using HMM Based Recognizers for Writer Identification and Verification. Proc. 9th Int. Workshop on Frontiers in Handwriting Recognition, pp. 167–172, 2004.',
      href: '/papers/iwfhr04.pdf',
    },
  ],
  presentations: [
    {
      text: 'A. Schlapbach and H. Bunke: Off-line Writer Verification: A Comparison of an HMM and a GMM Based System. Presentation slides, 10th Int. Workshop on Frontiers in Handwriting Recognition, 2006.',
      href: '/papers/iwfhr06Slides.pdf',
    },
  ],
};
