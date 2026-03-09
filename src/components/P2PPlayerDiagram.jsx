import React from 'react';

/**
 * Architecture diagram: Origin, signaling, STUN/TURN, peers, MediaSource buffer.
 * Segment-sharing arrow routes around signaling; WebRTC label on that path only.
 */
export default function P2PPlayerDiagram() {
  const vb = { w: 604, h: 420 };
  const pad = 48;
  const gap = 56;
  const peerSignalingGap = 24;

  const peerW = 120;
  const peerH = 100;
  const peerL = pad;
  const peerR = vb.w - pad - peerW;
  const peerY = pad;

  const sigW = 220;
  const sigH = 124;
  const sigX = peerL + peerW + peerSignalingGap;
  const sigY = pad;

  const stunW = 120;
  const stunH = 64;
  const stunX = vb.w / 2 - stunW / 2;
  const stunY = sigY + sigH + gap;

  const originW = 180;
  const originH = 72;
  const originX = vb.w / 2 - originW / 2;
  const originY = vb.h - pad - originH;

  const p2pY = 20;

  return (
    <figure className="p2p-diagram" aria-label="P2P HLS Player architecture">
      <svg
        viewBox={`0 0 ${vb.w} ${vb.h}`}
        className="p2p-diagram__svg"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <marker id="arr" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
            <path d="M0 0 L5 2.5 L0 5 z" className="p2p-diagram__arrowhead" />
          </marker>
          <marker id="arr-rev" markerWidth="6" markerHeight="5" refX="1" refY="2.5" orient="auto">
            <path d="M5 0 L0 2.5 L5 5 z" className="p2p-diagram__arrowhead" />
          </marker>
          <marker id="arr-accent" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
            <path d="M0 0 L5 2.5 L0 5 z" className="p2p-diagram__arrowhead--accent" />
          </marker>
          <marker id="arr-rev-accent" markerWidth="6" markerHeight="5" refX="1" refY="2.5" orient="auto">
            <path d="M5 0 L0 2.5 L5 5 z" className="p2p-diagram__arrowhead--accent" />
          </marker>
          <marker id="arr-dim" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
            <path d="M0 0 L5 2.5 L0 5 z" className="p2p-diagram__arrowhead--dim" />
          </marker>
        </defs>

        {/* Peer left */}
        <g className="p2p-diagram__node">
          <rect x={peerL} y={peerY} width={peerW} height={peerH} rx="10" className="p2p-diagram__box" />
          <text x={peerL + peerW / 2} y={peerY + 26} textAnchor="middle" className="p2p-diagram__label">Peer</text>
          <rect x={peerL + 16} y={peerY + 38} width={peerW - 32} height={54} rx="8" className="p2p-diagram__inner" />
          <text x={peerL + peerW / 2} y={peerY + 62} textAnchor="middle" className="p2p-diagram__sublabel">MediaSource</text>
          <text x={peerL + peerW / 2} y={peerY + 76} textAnchor="middle" className="p2p-diagram__sublabel">buffer</text>
        </g>

        {/* Peer right */}
        <g className="p2p-diagram__node">
          <rect x={peerR} y={peerY} width={peerW} height={peerH} rx="10" className="p2p-diagram__box" />
          <text x={peerR + peerW / 2} y={peerY + 26} textAnchor="middle" className="p2p-diagram__label">Peer</text>
          <rect x={peerR + 16} y={peerY + 38} width={peerW - 32} height={54} rx="8" className="p2p-diagram__inner" />
          <text x={peerR + peerW / 2} y={peerY + 62} textAnchor="middle" className="p2p-diagram__sublabel">MediaSource</text>
          <text x={peerR + peerW / 2} y={peerY + 76} textAnchor="middle" className="p2p-diagram__sublabel">buffer</text>
        </g>

        {/* WebSocket Signaling server */}
        <g className="p2p-diagram__node">
          <rect x={sigX} y={sigY} width={sigW} height={sigH} rx="10" className="p2p-diagram__box p2p-diagram__box--accent" />
          <text x={vb.w / 2} y={sigY + 28} textAnchor="middle" className="p2p-diagram__label">WebSocket Signaling</text>
          <text x={vb.w / 2} y={sigY + 52} textAnchor="middle" className="p2p-diagram__sublabel">Manages swarms</text>
          <text x={vb.w / 2} y={sigY + 70} textAnchor="middle" className="p2p-diagram__sublabel">Offer / Answer / ICE relay</text>
          <text x={vb.w / 2} y={sigY + 88} textAnchor="middle" className="p2p-diagram__sublabel">Broadcasts peer join/leave</text>
        </g>

        {/* STUN/TURN */}
        <g className="p2p-diagram__node">
          <rect x={stunX} y={stunY} width={stunW} height={stunH} rx="10" className="p2p-diagram__box p2p-diagram__box--stun" />
          <text x={vb.w / 2} y={stunY + 28} textAnchor="middle" className="p2p-diagram__sublabel">STUN / TURN</text>
          <text x={vb.w / 2} y={stunY + 50} textAnchor="middle" className="p2p-diagram__tiny">ICE candidates</text>
        </g>

        {/* Origin */}
        <g className="p2p-diagram__node">
          <rect x={originX} y={originY} width={originW} height={originH} rx="10" className="p2p-diagram__box" />
          <text x={vb.w / 2} y={originY + 30} textAnchor="middle" className="p2p-diagram__label">Origin</text>
          <text x={vb.w / 2} y={originY + 54} textAnchor="middle" className="p2p-diagram__sublabel">Manifests · HTTP (fallback)</text>
        </g>

        {/* Peer ↔ WebSocket Signaling (horizontal, bidirectional) */}
        <path d={`M ${peerL + peerW} ${peerY + 50} L ${sigX} ${peerY + 50}`} fill="none" className="p2p-diagram__line" markerEnd="url(#arr)" markerStart="url(#arr-rev)" />
        <path d={`M ${sigX + sigW} ${peerY + 50} L ${peerR} ${peerY + 50}`} fill="none" className="p2p-diagram__line" markerEnd="url(#arr)" markerStart="url(#arr-rev)" />

        {/* Peer ↔ Peer: path above signaling, touching top center of peer boxes */}
        <path d={`M ${peerL + peerW / 2} ${peerY} L ${peerL + peerW / 2} ${p2pY} L ${peerR + peerW / 2} ${p2pY} L ${peerR + peerW / 2} ${peerY}`} fill="none" className="p2p-diagram__line p2p-diagram__line--p2p" markerEnd="url(#arr-accent)" markerStart="url(#arr-rev-accent)" />
        <text x={vb.w / 2} y={p2pY - 12} textAnchor="middle" className="p2p-diagram__line-label p2p-diagram__line-label--p2p">WebRTC channeling</text>

        {/* Peers → STUN/TURN (arrows touch vertical center of STUN/TURN) */}
        <path d={`M ${peerL + peerW / 2} ${peerY + peerH} L ${peerL + peerW / 2} ${stunY + stunH / 2} L ${stunX} ${stunY + stunH / 2}`} fill="none" className="p2p-diagram__line p2p-diagram__line--ice" strokeDasharray="6 4" markerEnd="url(#arr)" />
        <path d={`M ${peerR + peerW / 2} ${peerY + peerH} L ${peerR + peerW / 2} ${stunY + stunH / 2} L ${stunX + stunW} ${stunY + stunH / 2}`} fill="none" className="p2p-diagram__line p2p-diagram__line--ice" strokeDasharray="6 4" markerEnd="url(#arr)" />

        {/* Origin → Peers (dimmer) */}
        <path d={`M ${originX} ${originY + originH / 2} L ${peerL + peerW / 2} ${originY + originH / 2} L ${peerL + peerW / 2} ${peerY + peerH}`} fill="none" className="p2p-diagram__line p2p-diagram__line--origin" markerEnd="url(#arr-dim)" />
        <path d={`M ${originX + originW} ${originY + originH / 2} L ${peerR + peerW / 2} ${originY + originH / 2} L ${peerR + peerW / 2} ${peerY + peerH}`} fill="none" className="p2p-diagram__line p2p-diagram__line--origin" markerEnd="url(#arr-dim)" />
      </svg>
    </figure>
  );
}
