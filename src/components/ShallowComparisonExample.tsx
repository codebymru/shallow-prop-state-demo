import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface Props {
  data: {
    count: number;
  };
}

// Child component using PureComponent for shallow comparison
class DisplayCount extends React.PureComponent<Props> {
  render() {
    console.log('DisplayCount rendered');
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <p className="text-lg">Count: {this.props.data.count}</p>
      </div>
    );
  }
}

// Parent component to demonstrate different update scenarios
export class ShallowComparisonExample extends React.Component {
  state = {
    data: { count: 0 },
  };

  // This will cause re-render because we're creating a new object reference
  handleUpdateWithNewReference = () => {
    this.setState({
      data: { count: this.state.data.count + 1 },
    });
    toast('Updated with new reference - Component will re-render');
  };

  // This won't cause re-render because we're mutating the same object reference
  handleUpdateSameReference = () => {
    const newData = this.state.data;
    newData.count += 1;
    this.setState({ data: newData });
    toast('Updated same reference - Component will NOT re-render');
  };

  render() {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">Current State</h2>
          <DisplayCount data={this.state.data} />
        </div>
        
        <div className="space-x-4">
          <Button 
            onClick={this.handleUpdateWithNewReference}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Update (New Reference)
          </Button>
          
          <Button 
            onClick={this.handleUpdateSameReference}
            className="bg-green-500 hover:bg-green-600"
          >
            Update (Same Reference)
          </Button>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="font-medium text-gray-700 mb-2">How it works:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>The blue button creates a new object reference - triggers re-render</li>
            <li>The green button mutates the existing object - no re-render</li>
            <li>Check console logs to see when component renders</li>
          </ul>
        </div>
      </div>
    );
  }
}