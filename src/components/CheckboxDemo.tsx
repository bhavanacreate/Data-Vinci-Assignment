import React, { useState, useCallback } from 'react';
import { TreeNode } from '../types';
import NestedCheckbox from './NestedCheckbox';
import { CheckSquare, Square, Minus } from 'lucide-react';

const CheckboxDemo: React.FC = () => {
  const [selectAllData, setSelectAllData] = useState<TreeNode[]>([
    {
      id: 'fruits',
      label: 'Fruits',
      checked: false,
      indeterminate: false,
      children: [
        { id: 'apple', label: 'Apple', checked: false, indeterminate: false },
        { id: 'banana', label: 'Banana', checked: false, indeterminate: false },
        { id: 'orange', label: 'Orange', checked: false, indeterminate: false },
        { id: 'grape', label: 'Grape', checked: false, indeterminate: false },
      ]
    },
    {
      id: 'vegetables',
      label: 'Vegetables',
      checked: false,
      indeterminate: false,
      children: [
        { id: 'carrot', label: 'Carrot', checked: false, indeterminate: false },
        { id: 'broccoli', label: 'Broccoli', checked: false, indeterminate: false },
        { id: 'spinach', label: 'Spinach', checked: false, indeterminate: false },
        { id: 'tomato', label: 'Tomato', checked: false, indeterminate: false },
      ]
    }
  ]);

  const updateNodeInTree = useCallback((nodes: TreeNode[], nodeId: string, checked: boolean): TreeNode[] => {
    return nodes.map(node => {
      if (node.id === nodeId) {
        const updatedNode = { 
          ...node, 
          checked, 
          indeterminate: false,
          children: node.children?.map(child => ({ 
            ...child, 
            checked, 
            indeterminate: false 
          }))
        };
        return updatedNode;
      }
      
      if (node.children) {
        const updatedChildren = updateNodeInTree(node.children, nodeId, checked);
        const checkedChildrenCount = updatedChildren.filter(child => child.checked).length;
        const totalChildren = updatedChildren.length;
        
        return {
          ...node,
          children: updatedChildren,
          checked: checkedChildrenCount === totalChildren,
          indeterminate: checkedChildrenCount > 0 && checkedChildrenCount < totalChildren
        };
      }
      
      return node;
    });
  }, []);

  const handleNodeChange = useCallback((nodeId: string, checked: boolean) => {
    setSelectAllData(prevData => updateNodeInTree(prevData, nodeId, checked));
  }, [updateNodeInTree]);

  const handleSelectAll = () => {
    const allChecked = selectAllData.every(category => 
      category.checked && category.children?.every(child => child.checked)
    );
    
    setSelectAllData(prevData => 
      prevData.map(category => ({
        ...category,
        checked: !allChecked,
        indeterminate: false,
        children: category.children?.map(child => ({
          ...child,
          checked: !allChecked,
          indeterminate: false
        }))
      }))
    );
  };

  const isSelectAllChecked = selectAllData.every(category => 
    category.checked && category.children?.every(child => child.checked)
  );

  const isSelectAllIndeterminate = !isSelectAllChecked && 
    selectAllData.some(category => 
      category.checked || category.indeterminate || 
      category.children?.some(child => child.checked)
    );

  const getSelectAllIcon = () => {
    if (isSelectAllIndeterminate) {
      return <Minus className="h-4 w-4 text-blue-600" />;
    }
    return isSelectAllChecked ? (
      <CheckSquare className="h-4 w-4 text-blue-600" />
    ) : (
      <Square className="h-4 w-4 text-gray-400" />
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Task 2: Nested Checkbox Component
      </h3>
      
      <div className="space-y-2">
        {/* Select All Checkbox */}
        <div 
          className="flex items-center py-3 px-3 hover:bg-blue-50 rounded-lg transition-colors duration-150 cursor-pointer border-b border-gray-100 mb-3 group"
          onClick={handleSelectAll}
        >
          <div className="flex items-center justify-center w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-150">
            {getSelectAllIcon()}
          </div>
          <span className="text-base font-semibold text-gray-900">Select All</span>
        </div>

        {/* Category Trees */}
        <div className="space-y-1">
          {selectAllData.map((category) => (
            <NestedCheckbox
              key={category.id}
              node={category}
              onNodeChange={handleNodeChange}
            />
          ))}
        </div>
      </div>

      {/* Selected Items Summary */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Selected Items:</h4>
        <div className="flex flex-wrap gap-2">
          {selectAllData.flatMap(category => 
            category.children?.filter(child => child.checked) || []
          ).map(item => (
            <span
              key={item.id}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {item.label}
            </span>
          ))}
          {selectAllData.flatMap(category => 
            category.children?.filter(child => child.checked) || []
          ).length === 0 && (
            <span className="text-sm text-gray-500 italic">No items selected</span>
          )}
        </div>
      </div>

      {/* Testing Guide */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Testing Scenarios:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
            <div className="font-medium text-emerald-800 mb-1">✓ Select All</div>
            <div className="text-emerald-700">All items should be checked</div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="font-medium text-blue-800 mb-1">✓ Category Selection</div>
            <div className="text-blue-700">All children should be checked</div>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
            <div className="font-medium text-orange-800 mb-1">✓ Partial Selection</div>
            <div className="text-orange-700">Parent shows indeterminate state</div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
            <div className="font-medium text-purple-800 mb-1">✓ Individual Items</div>
            <div className="text-purple-700">Parent state updates automatically</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckboxDemo;