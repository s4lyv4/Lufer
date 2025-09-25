import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Agent } from '../../types';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  const { name, email, phone, bio, rol } = agent;

  return (
    <div className="card overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-w-3 aspect-h-4 overflow-hidden">
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2">{name}</h3>
        <h5 className="text-sm font-serif font-semibold mb-4">-{rol}</h5>
        <p className="text-neutral-600 mb-4">{bio}</p>
        <div className="space-y-2">
          <div className="flex items-center text-neutral-700">
            <Phone className="w-5 h-5 mr-2 text-primary-600" />
            <a href={`tel:${phone}`} className="hover:text-primary-600 transition-colors">
              {phone}
            </a>
          </div>
          <div className="flex items-center text-neutral-700">
            <Mail className="w-5 h-5 mr-2 text-primary-600" />
            <a href={`mailto:${email}`} className="hover:text-primary-600 transition-colors">
              {email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;