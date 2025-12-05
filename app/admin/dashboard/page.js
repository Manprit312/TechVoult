"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Mail,
  Phone,
  Calendar,
  MessageSquare,
  Trash2,
  CheckCircle,
  XCircle,
  Eye,
  EyeOff,
  LogOut,
  RefreshCw,
  DollarSign,
  User,
  Clock,
} from "lucide-react";

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [filter, setFilter] = useState("all"); // all, new, read, contacted, closed
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    fetchInquiries();
  }, []);

  async function checkAuth() {
    try {
      const res = await fetch("/api/admin/auth");
      if (!res.ok || !(await res.json()).authenticated) {
        router.push("/admin/login");
      }
    } catch (error) {
      router.push("/admin/login");
    }
  }

  async function fetchInquiries() {
    try {
      const res = await fetch("/api/admin/inquiries");
      if (res.ok) {
        const data = await res.json();
        setInquiries(data.inquiries || []);
      } else if (res.status === 401) {
        router.push("/admin/login");
      }
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id, status) {
    try {
      const res = await fetch("/api/admin/inquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });

      if (res.ok) {
        fetchInquiries();
        if (selectedInquiry?.id === id) {
          setSelectedInquiry({ ...selectedInquiry, status });
        }
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  }

  async function deleteInquiry(id) {
    if (!confirm("Are you sure you want to delete this inquiry?")) return;

    try {
      const res = await fetch(`/api/admin/inquiries?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchInquiries();
        if (selectedInquiry?.id === id) {
          setSelectedInquiry(null);
        }
      }
    } catch (error) {
      console.error("Error deleting inquiry:", error);
    }
  }

  async function handleLogout() {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
    } catch (error) {
      router.push("/admin/login");
    }
  }

  const filteredInquiries = inquiries.filter((inq) => {
    if (filter === "all") return true;
    return inq.status === filter;
  });

  const stats = {
    total: inquiries.length,
    new: inquiries.filter((i) => i.status === "new").length,
    read: inquiries.filter((i) => i.status === "read").length,
    contacted: inquiries.filter((i) => i.status === "contacted").length,
    closed: inquiries.filter((i) => i.status === "closed").length,
  };

  const getStatusColor = (status) => {
    const colors = {
      new: "bg-blue-100 text-blue-800",
      read: "bg-yellow-100 text-yellow-800",
      contacted: "bg-green-100 text-green-800",
      closed: "bg-gray-100 text-gray-800",
    };
    return colors[status] || colors.new;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin text-indigo-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading inquiries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600 mb-1">Total</p>
            <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600 mb-1">New</p>
            <p className="text-3xl font-bold text-blue-600">{stats.new}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600 mb-1">Read</p>
            <p className="text-3xl font-bold text-yellow-600">{stats.read}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600 mb-1">Contacted</p>
            <p className="text-3xl font-bold text-green-600">{stats.contacted}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600 mb-1">Closed</p>
            <p className="text-3xl font-bold text-gray-600">{stats.closed}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Inquiries List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">Inquiries</h2>
                <div className="flex gap-2">
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="px-3 py-1 border rounded-lg text-sm"
                  >
                    <option value="all">All</option>
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                  </select>
                  <button
                    onClick={fetchInquiries}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="divide-y max-h-[600px] overflow-y-auto">
                {filteredInquiries.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    No inquiries found
                  </div>
                ) : (
                  filteredInquiries.map((inquiry) => (
                    <div
                      key={inquiry.id}
                      onClick={() => setSelectedInquiry(inquiry)}
                      className={`p-4 cursor-pointer hover:bg-gray-50 transition ${
                        selectedInquiry?.id === inquiry.id ? "bg-indigo-50" : ""
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">{inquiry.name}</p>
                          <p className="text-sm text-gray-600">{inquiry.email}</p>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            inquiry.status
                          )}`}
                        >
                          {inquiry.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2 mt-2">
                        {inquiry.message}
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        {new Date(inquiry.createdAt).toLocaleString()}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Inquiry Details */}
          <div className="lg:col-span-1">
            {selectedInquiry ? (
              <div className="bg-white rounded-lg shadow p-6 sticky top-4">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Inquiry Details</h3>
                  <button
                    onClick={() => setSelectedInquiry(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XCircle className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <User className="w-4 h-4" />
                      Name
                    </div>
                    <p className="font-medium text-gray-900">{selectedInquiry.name}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <Mail className="w-4 h-4" />
                      Email
                    </div>
                    <a
                      href={`mailto:${selectedInquiry.email}`}
                      className="text-indigo-600 hover:underline"
                    >
                      {selectedInquiry.email}
                    </a>
                  </div>

                  {selectedInquiry.phone && (
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Phone className="w-4 h-4" />
                        Phone
                      </div>
                      <a
                        href={`tel:${selectedInquiry.phone}`}
                        className="text-indigo-600 hover:underline"
                      >
                        {selectedInquiry.phone}
                      </a>
                    </div>
                  )}

                  {selectedInquiry.budget && (
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <DollarSign className="w-4 h-4" />
                        Budget
                      </div>
                      <p className="text-gray-900">{selectedInquiry.budget}</p>
                    </div>
                  )}

                  {(selectedInquiry.meetingDate || selectedInquiry.meetingTime) && (
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Calendar className="w-4 h-4" />
                        Meeting
                      </div>
                      <p className="text-gray-900">
                        {selectedInquiry.meetingDate && new Date(selectedInquiry.meetingDate).toLocaleDateString()}
                        {selectedInquiry.meetingTime && ` at ${selectedInquiry.meetingTime}`}
                      </p>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </div>
                    <p className="text-gray-900 whitespace-pre-wrap">{selectedInquiry.message}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <Clock className="w-4 h-4" />
                      Submitted
                    </div>
                    <p className="text-sm text-gray-900">
                      {new Date(selectedInquiry.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <div className="pt-4 border-t space-y-2">
                    <p className="text-sm font-medium text-gray-700">Update Status</p>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => updateStatus(selectedInquiry.id, "read")}
                        className="px-3 py-2 bg-yellow-100 text-yellow-800 rounded-lg text-sm hover:bg-yellow-200"
                      >
                        Mark Read
                      </button>
                      <button
                        onClick={() => updateStatus(selectedInquiry.id, "contacted")}
                        className="px-3 py-2 bg-green-100 text-green-800 rounded-lg text-sm hover:bg-green-200"
                      >
                        Contacted
                      </button>
                      <button
                        onClick={() => updateStatus(selectedInquiry.id, "closed")}
                        className="px-3 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm hover:bg-gray-200"
                      >
                        Close
                      </button>
                      <button
                        onClick={() => deleteInquiry(selectedInquiry.id)}
                        className="px-3 py-2 bg-red-100 text-red-800 rounded-lg text-sm hover:bg-red-200 flex items-center justify-center gap-1"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
                <EyeOff className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p>Select an inquiry to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

