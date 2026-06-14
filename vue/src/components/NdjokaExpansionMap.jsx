import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { feature } from 'topojson-client';
import '../assets/styles/components/NdjokaExpansionMap.css';

const WORLD_URL = 'https://unpkg.com/world-atlas@2/countries-110m.json';

const W = 1400;
const H = 714;

const DISTRIBUTORS = {
  CM: {
    country: 'Cameroun',
    flag: '🇨🇲',
    zone: 'Afrique',
    coords: [12.3547, 4.3612],
    distributorCount: 23,
    cities: [
      {
        city: 'Yaoundé',
        points: [
          { name: 'StartUp Academy – Mvog-Ada', phone: '(+237) 6 56 05 46 25' },
          { name: 'Vitrine StartUp – NRC, Route Bastos (Immeuble Y Building)', phone: '(+237) 6 56 18 84 16' },
          { name: 'Boulangerie Merlo – Ekie, face station Gulfin', phone: '(+237) 6 95 62 48 73' },
          { name: 'Supermarché SOPARCAM – Carrefour Messassi', phone: '(+237) 6 95 62 48 73' },
          { name: 'Chez Mr Solde – Elig-Essono', phone: '(+237) 6 52 11 84 85' },
        ],
      },
      {
        city: 'Douala',
        points: [
          { name: "StartUp Academy – Rue Ancien Number One, Elissam Motors", phone: '(+237) 6 90 12 49 51' },
          { name: 'Akwa Douala Bercy – Immeuble Kamako, 4è étage porte 403', phone: '(+237) 6 90 12 49 51' },
          { name: "Bonamousadi – face École Publique", phone: '+237 6 95 27 12 06' },
          { name: 'Supermarché CASH & CARRY MARKET – face Hôtel Somatel Bali', phone: '' },
          { name: 'Boulangerie Meno – Rond Point Deïdo', phone: '' },
        ],
      },
      {
        city: 'Dschang',
        points: [
          { name: "StartUp Academy – Marché Foto, face Église Saint Mathias", phone: '(+237) 6 76 85 19 16' },
          { name: 'Boulangeries Mbouoh – Avenue des Banques', phone: '(+237) 6 97 49 75 39' },
          { name: 'Boutique EM Shop – Derrière la Place de Fête', phone: '(+237) 6 97 66 06 59' },
          { name: 'Campus Université de Dschang – Restaurant FASA', phone: '(+237) 6 98 81 00 31' },
        ],
      },
      {
        city: 'Bafoussam',
        points: [
          { name: 'Supérette SOCROPAL', phone: '(+237) 6 99 06 02 47' },
          { name: 'Supermarché LE POINT PLUS – Rond Point BIAO', phone: '' },
          { name: 'Supermarché YATCH CENTER – face Agence CCA', phone: '' },
        ],
      },
      { city: 'Bangangté', points: [{ name: 'Centre Ville – face siège CEPOM (ex-Rodéo Pro)', phone: '' }] },
      { city: 'Buéa', points: [{ name: 'Tarred Malingo Moliyko – G6 Chilling', phone: '(+237) 6 77 95 05 26' }] },
      { city: 'Kribi', points: [{ name: 'Quartier Administratif – à côté du Sénat', phone: '' }] },
      { city: 'Foumbot', points: [{ name: 'Boulangerie Merlo', phone: '' }] },
      { city: 'Bertoua', points: [{ name: 'Yademe – face Gendarmerie (2ème entrée)', phone: '(+237) 6 77 57 43 05' }] },
      { city: 'Ngaoundéré', points: [{ name: 'Point de distribution', phone: '(+237) 6 95 65 72 96' }] },
      { city: 'Mbouda', points: [{ name: 'Further Market', phone: '(+237) 6 91 10 16 20' }] },
      { city: 'Bandjoun', points: [{ name: 'Boulangerie Jovi', phone: '' }] },
    ],
  },
  TG: {
    country: 'Togo',
    flag: '🇹🇬',
    zone: 'Afrique',
    coords: [1.2255, 6.1375],
    distributorCount: 3,
    cities: [
      {
        city: 'Lomé',
        points: [
          { name: 'Distributeur 1', phone: '(+228) 96 37 93 67' },
          { name: 'Distributeur 2', phone: '(+228) 97 19 51 85' },
          { name: 'Distributeur 3', phone: '(+228) 91 25 63 85' },
        ],
      },
    ],
  },
  GA: {
    country: 'Gabon',
    flag: '🇬🇦',
    zone: 'Afrique',
    coords: [9.4673, 0.3854],
    distributorCount: 1,
    cities: [{ city: 'Libreville', points: [{ name: 'Distributeur', phone: '(+241) 02 88 56 30' }] }],
  },
  CI: {
    country: "Côte d'Ivoire",
    flag: '🇨🇮',
    zone: 'Afrique',
    coords: [-4.0305, 5.3484],
    distributorCount: 2,
    cities: [
      {
        city: 'Abidjan',
        points: [
          { name: 'Distributeur 1', phone: '(+225) 07 04 64 02 03' },
          { name: 'Distributeur 2', phone: '(+225) 07 78 48 91 72' },
        ],
      },
    ],
  },
  TD: {
    country: 'Tchad',
    flag: '🇹🇩',
    zone: 'Afrique',
    coords: [15.0444, 12.1048],
    distributorCount: 2,
    cities: [
      {
        city: "N'Djamena",
        points: [
          { name: 'Arusha Market', phone: '(+235) 69 69 69 85' },
          { name: 'La Tchadienne', phone: '(+235) 22 52 70 35' },
        ],
      },
    ],
  },
  DE: {
    country: 'Allemagne',
    flag: '🇩🇪',
    zone: 'Diaspora',
    coords: [13.405, 52.52],
    distributorCount: 1,
    cities: [{ city: 'Berlin', points: [{ name: 'Distributeur', phone: '(+49) 176 8317 3491' }] }],
  },
  BE: {
    country: 'Belgique',
    flag: '🇧🇪',
    zone: 'Diaspora',
    coords: [4.3517, 50.8503],
    distributorCount: 2,
    cities: [
      {
        city: 'Bruxelles',
        points: [
          { name: 'Distributeur 1', phone: '(+32) 489 98 38 30' },
          { name: 'Distributeur 2', phone: '(+32) 496 44 13 62' },
        ],
      },
    ],
  },
  AE: {
    country: 'Émirats Arabes Unis',
    flag: '🇦🇪',
    zone: 'Diaspora',
    coords: [55.2708, 25.2048],
    distributorCount: 1,
    cities: [{ city: 'Dubaï', points: [{ name: 'Distributeur', phone: '(+971) 58 229 4761' }] }],
  },
  RU: {
    country: 'Russie',
    flag: '🇷🇺',
    zone: 'Diaspora',
    coords: [37.6173, 55.7558],
    distributorCount: 1,
    cities: [{ city: 'Moscou', points: [{ name: 'Distributeur', phone: '+7 999 836-46-33' }] }],
  },
  CA: {
    country: 'Canada',
    flag: '🇨🇦',
    zone: 'Diaspora',
    coords: [-79.3832, 43.6532],
    distributorCount: 1,
    cities: [
      {
        city: 'Toronto',
        points: [{ name: 'Africa Mart – 651 McCowan Road, Scarborough', phone: '+1 (416) 454-9483' }],
      },
    ],
  },
};

const STATS = [
  { value: 36, label: 'Points de distribution' },
  { value: 10, label: 'Pays représentés' },
  { value: 4, label: 'Continents' },
];

function TooltipContent({ data }) {
  const shown = data.cities.slice(0, 3);
  const remaining = data.cities.length - 3;
  return (
    <>
      <p className="nem-tip-country">
        <span className="nem-tip-flag" aria-hidden="true">{data.flag}</span>
        {data.country}
      </p>
      <p className="nem-tip-zone">Zone {data.zone}</p>
      <div className="nem-tip-sep" />
      <div className="nem-tip-count">
        <span className="nem-tip-count-val">{data.distributorCount}</span>
        <span className="nem-tip-count-lbl">
          {' '}distributeur{data.distributorCount > 1 ? 's' : ''}
        </span>
      </div>
      <div className="nem-tip-sep" />
      <div className="nem-tip-cities">
        {shown.map((city, i) => (
          <div key={i} className="nem-tip-city">
            <p className="nem-tip-city-name">{city.city}</p>
            {city.points[0] && (
              <p className="nem-tip-city-point">
                {city.points[0].name.length > 35
                  ? city.points[0].name.slice(0, 35) + '…'
                  : city.points[0].name}
              </p>
            )}
            {city.points[0]?.phone && (
              <a
                href={`tel:${city.points[0].phone.replace(/\s/g, '')}`}
                className="nem-tip-city-phone"
              >
                {city.points[0].phone}
              </a>
            )}
          </div>
        ))}
        {remaining > 0 && (
          <p className="nem-tip-more">
            et {remaining} autre{remaining > 1 ? 's' : ''} ville{remaining > 1 ? 's' : ''}
          </p>
        )}
      </div>
    </>
  );
}

export default function NdjokaExpansionMap() {
  const svgRef = useRef(null);
  const isMobileRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);
  const [tooltip, setTooltip] = useState(null);

  // Track mobile breakpoint
  useEffect(() => {
    const check = () => {
      const m = window.innerWidth < 768;
      isMobileRef.current = m;
      setIsMobile(m);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // D3 render — runs once at mount
  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl) return;
    let cancelled = false;

    const svg = d3
      .select(svgEl)
      .attr('viewBox', `0 0 ${W} ${H}`)
      .attr('role', 'img')
      .attr('aria-label', 'Carte de présence mondiale Ndjoka');

    const projection = d3.geoNaturalEarth1().scale(218).translate([W / 2, H / 2 + 20]);
    const geoPath = d3.geoPath().projection(projection);

    d3.json(WORLD_URL).then((world) => {
      if (cancelled) return;

      const land = feature(world, world.objects.land);

      // ── Phase 1 : dessin du trait des continents ───────────────
      const landPath = svg
        .append('path')
        .datum(land)
        .attr('class', 'nem-land')
        .attr('d', geoPath)
        .attr('fill', 'transparent')
        .attr('stroke', '#C8BEA8')
        .attr('stroke-width', '0.5');

      const totalLen = landPath.node().getTotalLength();
      landPath
        .attr('stroke-dasharray', totalLen)
        .attr('stroke-dashoffset', totalLen)
        .transition()
        .duration(2000)
        .ease(d3.easeLinear)
        .attr('stroke-dashoffset', 0)
        .on('end', () => {
          if (cancelled) return;
          landPath.transition().duration(800).attr('fill', '#E8E0D0');
        });

      // ── Phase 2 : apparition des points pays ──────────────────
      const dotsG = svg.append('g').attr('class', 'nem-dots');

      Object.entries(DISTRIBUTORS).forEach(([code, data], i) => {
        const [px, py] = projection(data.coords);
        const isCM = code === 'CM';
        const r = isCM ? 9 : 5;

        const g = dotsG
          .append('g')
          .attr('transform', `translate(${px},${py})`)
          .attr('class', 'nem-dot-group')
          .attr('opacity', 0)
          .attr('tabindex', 0)
          .attr('role', 'button')
          .attr('aria-label', `Distributeurs en ${data.country}`);

        // Zone de clic étendue — invisible mais capturable (44×44 px min pour mobile)
        g.append('circle')
          .attr('class', 'nem-hit')
          .attr('r', 24)
          .attr('fill', 'transparent');

        // Pulse ring
        g.append('circle')
          .attr('class', 'nem-pulse')
          .attr('r', r * 2.4)
          .attr('fill', 'none')
          .attr('stroke', 'rgba(242,178,51,0.4)')
          .attr('stroke-width', '1.5');

        // Dot principal
        g.append('circle')
          .attr('class', 'nem-dot')
          .attr('r', r)
          .attr('fill', '#F2B233')
          .attr('stroke', '#1F5E3B')
          .attr('stroke-width', '1.5');

        // Transition d'apparition
        g.transition()
          .delay(2200 + i * 150)
          .duration(400)
          .ease(d3.easeCubicOut)
          .attr('opacity', 1);

        // Calcul position tooltip en pourcentage du viewBox
        function showTip() {
          setTooltip({
            xPct: (px / W) * 100,
            yPct: (py / H) * 100,
            data,
            code,
            side: px > W / 2 ? 'left' : 'right',
            fromBottom: py > H * 0.65,
          });
        }

        g.on('click', () => showTip());
        g.on('mouseenter', () => { if (!isMobileRef.current) showTip(); });
        g.on('mouseleave', () => { if (!isMobileRef.current) setTooltip(null); });
        g.on('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            showTip();
          }
        });
      });
    });

    return () => {
      cancelled = true;
      d3.select(svgEl).selectAll('*').remove();
    };
  }, []);

  // Calcul des classes du tooltip desktop
  function tooltipClass() {
    if (!tooltip) return '';
    let cls = 'nem-tooltip';
    cls += ` nem-tooltip--${tooltip.side}`;
    if (tooltip.fromBottom) cls += ' nem-tooltip--up';
    return cls;
  }

  return (
    <section className="nem-section" aria-labelledby="nem-title">

      <div className="nem-header">
        <span className="nem-badge">Présence internationale</span>
        <h2 className="nem-title" id="nem-title">
          Une marque présente au Cameroun et au-delà
        </h2>
        <p className="nem-subtitle">
          Chaque nouveau point de distribution renforce la proximité entre Ndjoka et ses consommateurs.
        </p>
      </div>

      <div className="nem-stats" role="list" aria-label="Chiffres clés du réseau">
        {STATS.map((s, i) => (
          <div key={i} className="nem-stat" role="listitem">
            <span className="nem-stat-value">{s.value}</span>
            <span className="nem-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="nem-container">
        <svg ref={svgRef} className="nem-svg" />

        {/* Tooltip flottant — desktop uniquement */}
        {tooltip && !isMobile && (
          <div
            className={tooltipClass()}
            style={{ left: `${tooltip.xPct}%`, top: `${tooltip.yPct}%` }}
            role="region"
            aria-label={`Distributeurs en ${tooltip.data.country}`}
          >
            <TooltipContent data={tooltip.data} />
          </div>
        )}

        {/* Overlay + bottom sheet — mobile uniquement */}
        {tooltip && isMobile && (
          <>
            <div
              className="nem-overlay"
              onClick={() => setTooltip(null)}
              aria-hidden="true"
            />
            <div
              className="nem-sheet"
              role="dialog"
              aria-modal="true"
              aria-label={`Distributeurs en ${tooltip.data.country}`}
            >
              <div className="nem-sheet-handle" aria-hidden="true" />
              <button
                className="nem-sheet-close"
                onClick={() => setTooltip(null)}
                aria-label="Fermer"
                type="button"
              >
                <span className="material-symbols-outlined" aria-hidden="true">close</span>
              </button>
              <TooltipContent data={tooltip.data} />
            </div>
          </>
        )}
      </div>

    </section>
  );
}
