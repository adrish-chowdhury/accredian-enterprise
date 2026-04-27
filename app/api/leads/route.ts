import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

type Lead = {
  id: string;
  name: string;
  email: string;
  company: string;
  teamSize: string;
  message: string;
  createdAt: string;
};

async function ensureDataDir() {
  const dir = path.join(process.cwd(), "data");
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function readLeads(): Promise<Lead[]> {
  try {
    const content = await fs.readFile(LEADS_FILE, "utf-8");
    return JSON.parse(content);
  } catch {
    return [];
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, teamSize, message } = body;

    if (!name || !email || !company || !teamSize) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    await ensureDataDir();
    const leads = await readLeads();

    const newLead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      company: String(company).trim(),
      teamSize: String(teamSize),
      message: message ? String(message).trim() : "",
      createdAt: new Date().toISOString(),
    };

    leads.push(newLead);
    await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");

    return NextResponse.json({ success: true, id: newLead.id }, { status: 201 });
  } catch (err) {
    console.error("Lead submission error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await ensureDataDir();
    const leads = await readLeads();
    return NextResponse.json({ leads, count: leads.length });
  } catch {
    return NextResponse.json({ error: "Failed to read leads" }, { status: 500 });
  }
}
