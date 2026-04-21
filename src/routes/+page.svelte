<script>
  const name = "Ryusei Shiiba";

  const publications = [
    {
      title: "Iterative Specification Refinement towards Side Effect Free Configuration Repair",
      authors: "Ryusei Shiiba, Satoru Kobayashi, Osamu Akashi, Kensuke Fukuda",
      venue: "ACM CoNEXT 2026",
      link: "#"
    },
    {
      title: "Towards Separating Routing State Exploration from Protocol Semantics in Control Plane Verification",
      authors: "Ryusei Shiiba, Satoru Kobayashi, Osamu Akashi, Kensuke Fukuda",
      venue: "IEEE INFOCOM 2026 (Poster)",
      link: "#"
    }
    {
      title: "Topology-Driven Configuration of Emulation Networks With Deterministic Templating",
      authors: "Satoru Kobayashi, Ryusei Shiiba, Shinsuke Miwa, Toshiyuki Miyachi, Kensuke Fukuda",
      venue: "IEEE TNSM 2025",
      link: "#"
    }
    {
      title: "Refining specifications for configuration repair with side effect diagnosis",
      authors: "Ryusei Shiiba, Satoru Kobayashi, Osamu Akashi, Kensuke Fukuda",
      venue: "ACM SIGCOMM FMANO 2025",
      link: "#"
    },
    {
      title: "Verifying network-level properties for large-scale networks with header transformations in realtime",
      authors: "Ryusei Shiiba, Satoru Kobayashi, Osamu Akashi, Kensuke Fukuda",
      venue: "IPSJ Journal 2025",
      link: "#"
    },
    {
      title: "Improving QoS in Failure Scenarios: Measurement System for Low-Latency Backup Path",
      authors: "Yoshihiko Ito; Jin Nakazato; Ryusei Shiiba; Kensuke Fukuda; Hiroshi Esaki; Hideya Ochiai",
      venue: "IEEE ICOIN 2025",
      link: "#"
    },
    {
      title: "Dynamic Fixed-point Values in eBPF: a Case for Fully In-kernel Anomaly Detection",
      authors: "Osaki, Atsuya and Poisson, Manuel and Makino, Seiki and Shiiba, Ryusei and Fukuda, Kensuke and Okoshi, Tadashi and Nakazawa, Jin",
      venue: "ACM AINTEC 2024",
      link: "#"
    },
    {
      title: "dot2net: A labeled graph approach for template-based configuration of emulation networks",
      authors: "Satoru Kobayashi, Ryusei Shiiba, Ryosuke Miura, Shinsuke Miwa, Toshiyuki Miyachi, Kensuke Fukuda",
      venue: "IEEE CNSM 2023",
      link: "#"
    },
    {
      title: "Dot2tinet: A graph-based network configuration platform for large-scale emulation networks",
      authors: "Satoru Kobayashi, Ryusei Shiiba, Osamu Akashi, Kensuke Fukuda",
      venue: "ACM AINTEC 2022 (Poster)",
      link: "#"
    },
    {
      title: "Toward a compositional data plane verification for large-scale networks",
      authors: "Ryusei Shiiba, Satoru Kobayashi, Osamu Akashi, Kensuke Fukuda",
      venue: "ACM AINTEC 2022 (Poster)",
      link: "#"
    },
    {
      title: "Verifying Network Properties in SRv6 based Service Function Chaining",
      authors: "Ryusei Shiiba, Satoru Kobayashi, Osamu Akashi, Kensuke Fukuda",
      venue: "ACM AINTEC 2021",
      link: "#"
    },


  ];
</script>

<main>
  <h1>{name}</h1>
  <p>Researcher at National Institure of Informatics.</p>

  <section>
    <h2>About</h2>
    <p>
      I work on symbolic network analysis and testing techniques, such as network verification, configuration repair, and control plane simulation.
    </p>
  </section>

  <section>
  <h2>Publications</h2>

  <ul>
    {#each publications as pub}
      <li>
        <strong>{pub.title}</strong><br>
        {pub.authors}<br>
        {pub.venue}<br>
        <a href={pub.link}>[PDF]</a>
      </li>
    {/each}
  </ul>
</section>

</main>

<style>
  main {
    max-width: 700px;
    margin: 80px auto;
    font-family: system-ui;
    line-height: 1.7;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    margin-top: 2rem;
  }

  a {
    text-decoration: none;
    color: #444;
  }
</style>
