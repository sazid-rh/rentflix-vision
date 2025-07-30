import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  CreditCard,
  Wallet,
  Target,
  PieChart,
  ArrowUpCircle,
  ArrowDownCircle,
  Filter
} from "lucide-react";

export function MoneyManager() {
  const [transactions, setTransactions] = useState([
    { id: 1, type: "income", amount: 159.96, description: "Netflix Premium subscriptions", category: "Streaming", date: "2024-01-15", status: "completed" },
    { id: 2, type: "expense", amount: 47.97, description: "Netflix Premium accounts (3x)", category: "Subscriptions", date: "2024-01-15", status: "completed" },
    { id: 3, type: "income", amount: 87.92, description: "Disney+ subscriptions", category: "Streaming", date: "2024-01-14", status: "completed" },
    { id: 4, type: "expense", amount: 25.99, description: "Server hosting", category: "Infrastructure", date: "2024-01-14", status: "pending" },
    { id: 5, type: "income", amount: 95.94, description: "HBO Max subscriptions", category: "Streaming", date: "2024-01-13", status: "completed" },
    { id: 6, type: "expense", amount: 15.99, description: "Payment processing fees", category: "Fees", date: "2024-01-13", status: "completed" },
  ]);

  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false);

  const totalIncome = transactions.filter(t => t.type === "income").reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions.filter(t => t.type === "expense").reduce((sum, t) => sum + t.amount, 0);
  const netProfit = totalIncome - totalExpenses;

  const monthlyData = [
    { month: "Dec", income: 2840, expenses: 1240 },
    { month: "Jan", income: 3200, expenses: 1450 },
    { month: "Feb", income: 3850, expenses: 1580 },
    { month: "Mar", income: 4200, expenses: 1720 },
  ];

  const categories = [
    { name: "Streaming", income: 2840, expenses: 450, color: "bg-purple-500" },
    { name: "Subscriptions", income: 0, expenses: 890, color: "bg-blue-500" },
    { name: "Infrastructure", income: 0, expenses: 340, color: "bg-green-500" },
    { name: "Fees", income: 0, expenses: 180, color: "bg-orange-500" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Money Manager
          </h1>
          <p className="text-muted-foreground mt-1">
            Track income, expenses, and financial performance
          </p>
        </div>
        <Dialog open={isAddTransactionOpen} onOpenChange={setIsAddTransactionOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 shadow-glow">
              <Plus className="w-4 h-4 mr-2" />
              Add Transaction
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md bg-gradient-glass border-border/50">
            <DialogHeader>
              <DialogTitle>Add New Transaction</DialogTitle>
              <DialogDescription>
                Record a new income or expense transaction
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="type">Transaction Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="income">
                      <div className="flex items-center gap-2">
                        <ArrowUpCircle className="w-4 h-4 text-emerald-400" />
                        Income
                      </div>
                    </SelectItem>
                    <SelectItem value="expense">
                      <div className="flex items-center gap-2">
                        <ArrowDownCircle className="w-4 h-4 text-red-400" />
                        Expense
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" placeholder="Transaction description" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="streaming">Streaming</SelectItem>
                    <SelectItem value="subscriptions">Subscriptions</SelectItem>
                    <SelectItem value="infrastructure">Infrastructure</SelectItem>
                    <SelectItem value="fees">Fees</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Add Transaction
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Financial Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-card border-border/50 shadow-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <ArrowUpCircle className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-2xl font-bold text-emerald-400">${totalIncome.toFixed(2)}</p>
                <p className="text-xs text-muted-foreground">Total Income</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border/50 shadow-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <ArrowDownCircle className="w-5 h-5 text-red-400" />
              <div>
                <p className="text-2xl font-bold text-red-400">${totalExpenses.toFixed(2)}</p>
                <p className="text-xs text-muted-foreground">Total Expenses</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border/50 shadow-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              <div>
                <p className={`text-2xl font-bold ${netProfit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  ${netProfit.toFixed(2)}
                </p>
                <p className="text-xs text-muted-foreground">Net Profit</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border/50 shadow-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{totalExpenses > 0 ? ((netProfit / totalIncome) * 100).toFixed(1) : 0}%</p>
                <p className="text-xs text-muted-foreground">Profit Margin</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 bg-secondary/50">
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Recent Transactions</h3>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
          
          <div className="space-y-3">
            {transactions.map((transaction) => (
              <Card key={transaction.id} className="bg-gradient-card border-border/50 shadow-glass">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === "income" ? "bg-emerald-500/10" : "bg-red-500/10"
                      }`}>
                        {transaction.type === "income" ? 
                          <ArrowUpCircle className="w-5 h-5 text-emerald-400" /> :
                          <ArrowDownCircle className="w-5 h-5 text-red-400" />
                        }
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {transaction.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{transaction.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${
                        transaction.type === "income" ? "text-emerald-400" : "text-red-400"
                      }`}>
                        {transaction.type === "income" ? "+" : "-"}${transaction.amount.toFixed(2)}
                      </p>
                      <Badge className={`text-xs ${
                        transaction.status === "completed" ? 
                          "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                          "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                      }`}>
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="bg-gradient-card border-border/50 shadow-glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Monthly Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyData.map((month) => (
                    <div key={month.month} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{month.month}</span>
                        <span className="text-sm text-emerald-400">
                          +${(month.income - month.expenses).toFixed(0)}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-secondary/30 rounded-full h-2">
                            <div 
                              className="bg-emerald-500 h-2 rounded-full"
                              style={{ width: `${(month.income / 5000) * 100}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground w-16">${month.income}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-secondary/30 rounded-full h-2">
                            <div 
                              className="bg-red-500 h-2 rounded-full"
                              style={{ width: `${(month.expenses / 5000) * 100}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground w-16">${month.expenses}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-primary" />
                  Categories Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categories.map((category) => {
                    const total = category.income + category.expenses;
                    return (
                      <div key={category.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${category.color}`} />
                            <span className="font-medium">{category.name}</span>
                          </div>
                          <span className="text-sm">
                            ${(category.income - category.expenses).toFixed(0)}
                          </span>
                        </div>
                        <div className="space-y-1">
                          {category.income > 0 && (
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground w-16">Income:</span>
                              <div className="flex-1 bg-secondary/30 rounded-full h-1">
                                <div 
                                  className="bg-emerald-500 h-1 rounded-full"
                                  style={{ width: `${(category.income / 3000) * 100}%` }}
                                />
                              </div>
                              <span className="text-xs text-emerald-400">${category.income}</span>
                            </div>
                          )}
                          {category.expenses > 0 && (
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground w-16">Expenses:</span>
                              <div className="flex-1 bg-secondary/30 rounded-full h-1">
                                <div 
                                  className="bg-red-500 h-1 rounded-full"
                                  style={{ width: `${(category.expenses / 1000) * 100}%` }}
                                />
                              </div>
                              <span className="text-xs text-red-400">${category.expenses}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="budget" className="space-y-4">
          <Card className="bg-gradient-card border-border/50 shadow-glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Budget Planning
              </CardTitle>
              <CardDescription>Set and track your financial goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Target className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Budget planning tools coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card className="bg-gradient-card border-border/50 shadow-glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Financial Reports
              </CardTitle>
              <CardDescription>Generate detailed financial reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Report generation coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}