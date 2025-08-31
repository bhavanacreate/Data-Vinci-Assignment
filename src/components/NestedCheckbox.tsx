import React from 'react';
import { TreeNode } from '../types';
import { CheckSquare, Square, Minus } from 'lucide-react';

interface NestedCheckboxProps {
  node: TreeNode;
  onNodeChange: (nodeId: string, checked: boolean) => void;
  level?: number;
}

const NestedCheckbox: React.FC<NestedCheckboxProps> = ({ 
  node, 
  onNodeChange, 
  level = 0 
}) => {
  const handleCheckboxChange = () => {
    onNodeChange(node.id, !node.checked);
  };

  const getCheckboxIcon = () => {
    if (node.indeterminate) {
      return <Minus className="h-4 w-4 text-blue-600" />;
    }
    return node.checked ? (
      <CheckSquare className="h-4 w-4 text-blue-600" />
    ) : (
      <Square className="h-4 w-4 text-gray-400" />
    );
  };

  const paddingLeft = level * 24;

  return (
    <div className="select-none">
      <div 
        className="flex items-center py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors duration-150 cursor-pointer group"
        style={{ paddingLeft: `${paddingLeft + 12}px` }}
        onClick={handleCheckboxChange}
      >
        <div className="flex items-center justify-center w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-150">
          {getCheckboxIcon()}
        </div>
        <span className={`text-sm font-medium ${
          node.checked ? 'text-gray-900' : 'text-gray-700'
        } ${level === 0 ? 'text-base font-semibold' : ''}`}>
          {node.label}
        </span>
      </div>
      
      {node.children && node.children.length > 0 && (
        <div className="space-y-1">
          {node.children.map((child) => (
            <NestedCheckbox
              key={child.id}
              node={child}
              onNodeChange={onNodeChange}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NestedCheckbox;