import React, { useState } from 'react';
import { Code2, Settings, Table, Type, Moon, Sun, Zap } from 'lucide-react';

// Import custom components
import Button from '../components/custom/Button';
import { Card, CardHeader, CardContent, CardTitle } from '../components/custom/Card';
import Badge from '../components/custom/Badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/custom/Tabs';
import { Select, SelectItem } from '../components/custom/Select';
import Switch from '../components/custom/Switch';
import Label from '../components/custom/Label';
import Separator from '../components/custom/Separator';

// Import core UI components
import InputField from '../components/ui/InputField';
import DataTable from '../components/ui/DataTable';

// Import showcase utilities
import ComponentDemo from '../components/showcase/ComponentDemo';
import CodeBlock from '../components/showcase/CodeBlock';

export default function ComponentShowcase() {
  const [darkMode, setDarkMode] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [inputVariant, setInputVariant] = useState('outlined');
  const [inputSize, setInputSize] = useState('md');
  const [inputDisabled, setInputDisabled] = useState(false);
  const [inputInvalid, setInputInvalid] = useState(false);
  const [inputLoading, setInputLoading] = useState(false);

  const tableData = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Developer', status: 'Active', joinDate: '2024-01-15' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Designer', status: 'Active', joinDate: '2024-02-20' },
    { id: 3, name: 'Carol Davis', email: 'carol@example.com', role: 'Product Manager', status: 'Inactive', joinDate: '2023-11-10' },
    { id: 4, name: 'David Wilson', email: 'david@example.com', role: 'Developer', status: 'Active', joinDate: '2024-03-05' },
    { id: 5, name: 'Eva Brown', email: 'eva@example.com', role: 'QA Engineer', status: 'Active', joinDate: '2024-01-28' },
  ];

  const tableColumns = [
    { key: 'name', title: 'Name', sortable: true },
    { key: 'email', title: 'Email', sortable: true },
    { key: 'role', title: 'Role', sortable: true },
    { 
      key: 'status', 
      title: 'Status',
      sortable: true,
      render: (value) => (
        <Badge variant={value === 'Active' ? 'default' : 'secondary'}>
          {value}
        </Badge>
      )
    },
    { key: 'joinDate', title: 'Join Date', sortable: true }
  ];

  const [tableLoading, setTableLoading] = useState(false);
  const [tableSelectable, setTableSelectable] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);

  const inputCodeExample = `<InputField
  variant="${inputVariant}"
  size="${inputSize}"
  ${inputDisabled ? 'disabled' : ''}
  ${inputInvalid ? 'invalid' : ''}
  ${inputLoading ? 'loading' : ''}
/>`;

  const tableCodeExample = `<DataTable
  ${tableLoading ? 'loading' : ''}
  ${tableSelectable ? 'selectable' : ''}
/>`;

  // Toggle dark mode on the root element
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-50">
      <header className="bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold">React Components</h1>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Standalone UI Library</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4 text-gray-400" />
                <Switch id="dark-mode-toggle" checked={darkMode} onCheckedChange={setDarkMode} />
                <Label htmlFor="dark-mode-toggle" className="sr-only">Toggle dark mode</Label>
                <Moon className="h-4 w-4 text-gray-400" />
              </div>
              <Badge variant="custom" className="hidden sm:inline-flex bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0">v1.0.0</Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <Badge variant="custom" className="inline-flex items-center space-x-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-2 mb-4">
            <Zap className="w-4 h-4" />
            <span>Modern React Components</span>
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Beautiful, Accessible & Customizable</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Production-ready components built with React and modern design principles. No external UI libraries needed.</p>
        </div>

        <Tabs defaultValue="inputfield">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="inputfield"><Type className="w-4 h-4 mr-2" />InputField</TabsTrigger>
              <TabsTrigger value="datatable"><Table className="w-4 h-4 mr-2" />DataTable</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="inputfield" className="mt-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <ComponentDemo title="InputField Component" description="A flexible input component with validation states and multiple variants" badge="Interactive Demo">
                  <div className="grid md:grid-cols-2 gap-6 p-4 md:p-6 bg-gray-100/50 dark:bg-gray-900/50 rounded-lg">
                    <div className="space-y-4">
                      <InputField value={inputValue} onChange={(e) => setInputValue(e.target.value)} label="Email Address" placeholder="Enter your email" helperText="We'll never share your email" variant={inputVariant} size={inputSize} disabled={inputDisabled} invalid={inputInvalid} loading={inputLoading} clearable errorMessage={inputInvalid ? "Please enter a valid email address" : undefined} />
                      <InputField value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} label="Password" placeholder="Enter your password" type="password" variant={inputVariant} size={inputSize} disabled={inputDisabled} helperText="Must be at least 8 characters" />
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">All Sizes</h4>
                      <InputField placeholder="Small input" size="sm" variant={inputVariant} />
                      <InputField placeholder="Medium input" size="md" variant={inputVariant} />
                      <InputField placeholder="Large input" size="lg" variant={inputVariant} />
                    </div>
                  </div>
                </ComponentDemo>
                <ComponentDemo title="Code Example"><CodeBlock code={inputCodeExample} /></ComponentDemo>
              </div>
              <div className="space-y-6">
                <Card className="sticky top-24">
                  <CardHeader><CardTitle className="flex items-center space-x-2"><Settings className="w-5 h-5" /><span>Customize</span></CardTitle></CardHeader>
                  <CardContent className="space-y-4">
                    <div><Label htmlFor="variant-select">Variant</Label><Select id="variant-select" value={inputVariant} onValueChange={setInputVariant}><SelectItem value="outlined">Outlined</SelectItem><SelectItem value="filled">Filled</SelectItem><SelectItem value="ghost">Ghost</SelectItem></Select></div>
                    <div><Label htmlFor="size-select">Size</Label><Select id="size-select" value={inputSize} onValueChange={setInputSize}><SelectItem value="sm">Small</SelectItem><SelectItem value="md">Medium</SelectItem><SelectItem value="lg">Large</SelectItem></Select></div>
                    <Separator />
                    <div className="space-y-3">
                      <div className="flex items-center justify-between"><Label htmlFor="disabled-switch">Disabled</Label><Switch id="disabled-switch" checked={inputDisabled} onCheckedChange={setInputDisabled} /></div>
                      <div className="flex items-center justify-between"><Label htmlFor="invalid-switch">Invalid State</Label><Switch id="invalid-switch" checked={inputInvalid} onCheckedChange={setInputInvalid} /></div>
                      <div className="flex items-center justify-between"><Label htmlFor="loading-switch">Loading</Label><Switch id="loading-switch" checked={inputLoading} onCheckedChange={setInputLoading} /></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="datatable" className="mt-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <ComponentDemo title="DataTable Component" description="Advanced data table with sorting, selection, and loading states" badge="Interactive Demo">
                  <div className="space-y-4">
                    {selectedRows.length > 0 && (
                      <div className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-lg p-3">
                        <p className="text-sm text-indigo-700 dark:text-indigo-300">{selectedRows.length} row{selectedRows.length !== 1 ? 's' : ''} selected</p>
                      </div>
                    )}
                    <DataTable data={tableData} columns={tableColumns} loading={tableLoading} selectable={tableSelectable} onRowSelect={setSelectedRows} emptyMessage="No users found" />
                  </div>
                </ComponentDemo>
                <ComponentDemo title="Code Example"><CodeBlock code={tableCodeExample} /></ComponentDemo>
              </div>
              <div className="space-y-6">
                <Card className="sticky top-24">
                  <CardHeader><CardTitle className="flex items-center space-x-2"><Settings className="w-5 h-5" /><span>Customize</span></CardTitle></CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between"><Label htmlFor="selectable-switch">Row Selection</Label><Switch id="selectable-switch" checked={tableSelectable} onCheckedChange={setTableSelectable} /></div>
                      <div className="flex items-center justify-between"><Label htmlFor="table-loading-switch">Loading State</Label><Switch id="table-loading-switch" checked={tableLoading} onCheckedChange={setTableLoading} /></div>
                    </div>
                    <Separator />
                    <div className="text-sm text-gray-600 dark:text-gray-400"><h4 className="font-medium mb-2">Features</h4><ul className="space-y-1 text-xs list-disc list-inside"><li>Column sorting</li><li>Row selection (single/multi)</li><li>Custom cell renderers</li><li>Loading & Empty states</li><li>Responsive design</li></ul></div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="mt-16 py-8 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Built with React & TailwindCSS • Designed for modern web applications
        </p>
      </footer>
    </div>
  );
}